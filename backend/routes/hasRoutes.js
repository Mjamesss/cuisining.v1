const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const HelpAndSupport = require('../models/helpAndSupport');
const Profile = require('../models/profile');
const nodemailer = require('nodemailer');
const User = require('../models/user');

const createTransporter = () => {
  try {
    const { EMAIL_USER, EMAIL_PASS } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS) {
      throw new Error('Email credentials are missing in environment variables');
    }

    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
  } catch (error) {
    console.error('Error creating transporter:', error);
    throw error;
  }
};
// Middleware to check cooldown - allow first submission without restriction
const checkCooldown = async (req, res, next) => {
  try {
    const type = req.body.type || (req.query.type || (req.body.rating ? 'feedback' : 'report'));
    const userId = req.userId;

    // Check if user has ever submitted this type of content before
    const previousSubmission = await HelpAndSupport.findOne({
      userId,
      type
    });

    // If this is their first submission, allow it without cooldown
    if (!previousSubmission) {
      return next();
    }
    
    // Otherwise, apply the 3-day cooldown
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const recentSubmission = await HelpAndSupport.findOne({
      userId,
      type,
      createdAt: { $gte: threeDaysAgo }
    }).sort({ createdAt: -1 });

    if (recentSubmission) {
      const nextAvailable = new Date(recentSubmission.createdAt);
      nextAvailable.setDate(nextAvailable.getDate() + 3);
      
      return res.status(429).json({ 
        success: false,
        message: `You can only submit ${type} once every 3 days. Next submission available on ${nextAvailable.toLocaleDateString()}.`,
        nextAvailable: nextAvailable
      });
    }

    next();
  } catch (error) {
    console.error('Cooldown check error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error checking submission cooldown' 
    });
  }
};

// Check cooldown status
// Check cooldown status
router.get('/cooldown-status', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    // Get the most recent submissions of each type
    const [lastReport, lastFeedback] = await Promise.all([
      HelpAndSupport.findOne({ userId, type: 'report' }).sort({ createdAt: -1 }),
      HelpAndSupport.findOne({ userId, type: 'feedback' }).sort({ createdAt: -1 })
    ]);

    const result = {
      report: {
        canSubmit: !lastReport || (new Date(lastReport.createdAt.getTime() + 3 * 24 * 60 * 60 * 1000) <= new Date()),
        nextAvailable: lastReport ? new Date(lastReport.createdAt.getTime() + 3 * 24 * 60 * 60 * 1000) : null,
        firstTime: !lastReport
      },
      feedback: {
        canSubmit: !lastFeedback || (new Date(lastFeedback.createdAt.getTime() + 3 * 24 * 60 * 60 * 1000) <= new Date()),
        nextAvailable: lastFeedback ? new Date(lastFeedback.createdAt.getTime() + 3 * 24 * 60 * 60 * 1000) : null,
        firstTime: !lastFeedback
      }
    };

    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error getting cooldown status:', error);
    res.status(500).json({ success: false, message: 'Error getting cooldown status' });
  }
});

// Submit report
router.post('/report', verifyToken, checkCooldown, async (req, res) => {
  try {
    const { reportMessage } = req.body;
    const userId = req.userId;

    if (!reportMessage || reportMessage.trim().length === 0) {
      return res.status(400).json({ 
        success: false,
        message: 'Report message is required.' 
      });
    }

    const profile = await Profile.findOne({ userID: userId });
    if (!profile) {
      return res.status(403).json({ 
        success: false,
        message: 'Please complete your profile before submitting a report.' 
      });
    }

    const newReport = new HelpAndSupport({
      userId,
      nameOfTheReporter: profile.fullName,
      reportMessage: reportMessage.trim(),
      type: 'report'
    });

    await newReport.save();

    res.status(201).json({
      success: true,
      message: 'Report submitted successfully!',
      data: {
        id: newReport._id,
        createdAt: newReport.createdAt,
        nextAvailable: new Date(newReport.createdAt.getTime() + 3 * 24 * 60 * 60 * 1000)
      }
    });

  } catch (error) {
    console.error('Error submitting report:', error);
    res.status(500).json({ 
      success: false,
      message: error.response?.data?.message || 'Failed to submit report. Please try again.' 
    });
  }
});

// Submit feedback
router.post('/rate', verifyToken, checkCooldown, async (req, res) => {
  try {
    const { rating, feedback = '' } = req.body;
    const userId = req.userId;

    if (typeof rating !== 'number' || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide a valid rating between 1 and 5.' 
      });
    }

    const profile = await Profile.findOne({ userID: userId });
    if (!profile) {
      return res.status(403).json({ 
        success: false,
        message: 'Please complete your profile before submitting feedback.' 
      });
    }

    const newFeedback = new HelpAndSupport({
      userId,
      nameOfTheRater: profile.fullName,
      rating,
      feedback: feedback.trim(),
      type: 'feedback'
    });

    await newFeedback.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your feedback!',
      data: {
        id: newFeedback._id,
        createdAt: newFeedback.createdAt,
        nextAvailable: new Date(newFeedback.createdAt.getTime() + 3 * 24 * 60 * 60 * 1000)
      }
    });

  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ 
      success: false,
      message: error.response?.data?.message || 'Failed to submit feedback. Please try again.' 
    });
  }
});

module.exports = router;
router.get('/reports', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    // Query for reports only (type: 'report')
    const reports = await HelpAndSupport.find({ type: 'report' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalReports = await HelpAndSupport.countDocuments({ type: 'report' });
    const totalPages = Math.ceil(totalReports / limit);

    res.status(200).json({
      message: 'Reports fetched successfully',
      data: reports,
      pagination: {
        currentPage: page,
        totalPages,
        totalReports,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    });

  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ 
      message: 'Server error while fetching reports.',
      error: error.message 
    });
  }
});

// GET route to fetch paginated ratings (no token required)
router.get('/ratings', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    // Query for ratings only (type: 'feedback')
    const ratings = await HelpAndSupport.find({ type: 'feedback' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalRatings = await HelpAndSupport.countDocuments({ type: 'feedback' });
    const totalPages = Math.ceil(totalRatings / limit);

    // Calculate average rating
    const averageRatingResult = await HelpAndSupport.aggregate([
      { $match: { type: 'feedback' } },
      { $group: { _id: null, averageRating: { $avg: '$rating' } } }
    ]);
    const averageRating = averageRatingResult.length > 0 ? averageRatingResult[0].averageRating : 0;

    res.status(200).json({
      message: 'Ratings fetched successfully',
      data: ratings,
      averageRating: parseFloat(averageRating.toFixed(1)),
      pagination: {
        currentPage: page,
        totalPages,
        totalRatings,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    });

  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ 
      message: 'Server error while fetching ratings.',
      error: error.message 
    });
  }
});
router.post('/respond/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { adminResponse, status, adminEmail } = req.body; // Get adminEmail from request

    if (!adminResponse || adminResponse.trim().length === 0) {
      return res.status(400).json({ 
        success: false,
        message: 'Response message is required.' 
      });
    }

    if (!adminEmail) {
      return res.status(400).json({ 
        success: false,
        message: 'Admin email is required for sending responses.' 
      });
    }

    const item = await HelpAndSupport.findByIdAndUpdate(
      id,
      { 
        adminResponse: adminResponse.trim(),
        status: status || 'resolved',
        respondedAt: new Date(),
        adminEmail // Store which admin responded
      },
      { new: true }
    ).lean();

    if (!item) {
      return res.status(404).json({ 
        success: false,
        message: 'Report/feedback not found.' 
      });
    }

    // Send email notification if we have user email
    if (item.userId) {
      try {
        const user = await User.findById(item.userId);
        if (user && user.email) {
          const transporter = await createTransporter(adminEmail);
          
          const mailOptions = {
            from: `Cuisining Support Team <info.cuisining@gmail.com>`,
            to: user.email,
            subject: `Response to your ${item.type === 'report' ? 'Report' : 'Feedback'}`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Response to your ${item.type === 'report' ? 'Report' : 'Feedback'}</title>
              </head>
              <body style="font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 0; background-color: #EAEAEA; color: #363100;">
                <!-- Main Container -->
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <div style="background-color: #C1B857; padding: 15px; text-align: center; position: relative;">
                    <!-- App Icon -->
                    <div style="position: absolute; top: 10px; left: 15px;">
                      <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741024966/tsj7rec8cdwkij48sji7.png" alt="Cuisining Logo" style="width: 40px; height: auto; border-radius: 5px;">
                    </div>
                    <h1 style="color: #363100; margin: 0; font-size: 22px; font-weight: 600;">Your ${item.type === 'report' ? 'Report' : 'Feedback'} Response</h1>
                  </div>
          
                  <!-- Content -->
                  <div style="padding: 30px 20px;">
                    <p style="font-size: 16px; line-height: 1.5; color: #363100; margin-bottom: 20px;">
                      Dear ${item.nameOfTheReporter || item.nameOfTheRater || 'User'},
                    </p>
          
                    <p style="font-size: 16px; line-height: 1.5; color: #363100; margin-bottom: 20px;">
                      Thank you for reaching out to us at Cuisining. We appreciate your ${item.type === 'report' ? 'report' : 'feedback'} and have reviewed your submission. Here is our response:
                    </p>
          
                    <div style="background-color: #F9F9F9; padding: 20px; border-left: 4px solid #948F5C; margin: 20px 0; border-radius: 7px;">
                      ${adminResponse}
                    </div>
          
                    <p style="font-size: 16px; line-height: 1.5; color: #363100; margin-bottom: 10px;">
                      Status: 
                      <span style="font-weight: 600; color: ${status === 'resolved' ? '#28a745' : '#363100'};">
                        ${status || 'resolved'}
                      </span>
                    </p>
          
                    <p style="font-size: 16px; line-height: 1.5; color: #363100; margin-bottom: 20px;">
                      If you have any further questions or need assistance, please don't hesitate to contact us.
                    </p>
                  </div>
          
                  <!-- Footer -->
                  <div style="padding: 20px; background-color: #948F5C; text-align: center;">
                    <p style="color: #ffffff; font-size: 14px; margin-bottom: 5px; font-weight: 500;">
                      Best regards,<br>
                      The Cuisining Support Team
                    </p>
                    <a href="mailto:info.cuisining@gmail.com" style="color: #ffffff; text-decoration: underline; font-size: 14px;">
                      info.cuisining@gmail.com
                    </a>
                  </div>
                </div>
          
                <!-- Spacing at the bottom -->
                <div style="height: 20px;"></div>
              </body>
              </html>
            `,
          };

          await transporter.sendMail(mailOptions);
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails
      }
    }

    res.status(200).json({
      success: true,
      message: 'Response submitted successfully!',
      data: item
    });

  } catch (error) {
    console.error('Error submitting response:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to submit response. Please try again.' 
    });
  }
});
// Update status of report/feedback
router.put('/status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'resolved'].includes(status)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid status value.' 
      });
    }

    const item = await HelpAndSupport.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).lean();

    if (!item) {
      return res.status(404).json({ 
        success: false,
        message: 'Report/feedback not found.' 
      });
    }

    res.status(200).json({
      success: true,
      message: 'Status updated successfully!',
      data: item
    });

  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to update status. Please try again.' 
    });
  }
});
module.exports = router;