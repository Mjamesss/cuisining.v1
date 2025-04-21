const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const User = require('../models/user');
const Profile = require('../models/profile');
const HelpAndSupport = require('../models/HelpAndSupport');

router.post('/report', verifyToken, async (req, res) => {
  try {
      const { reportMessage } = req.body;

      // Validate input
      if (!reportMessage) {
          return res.status(400).json({ message: 'Report message is required.' });
      }

      const userId = req.userId;

      // Fetch profile
      const profile = await Profile.findOne({ userID: userId });
      
      if (!profile) {
          return res.status(403).json({ 
              message: 'You must create a profile before submitting a report.',
          });
      }

      // Create report with all required fields including type
      const newReport = new HelpAndSupport({
          userId,
          nameOfTheReporter: profile.fullName,
          reportMessage,
          type: 'report' // Explicitly set the type
      });

      await newReport.save();

      res.status(201).json({
          message: 'Report submitted successfully.',
          report: {
              id: newReport._id,
              userId,
              nameOfTheReporter: profile.fullName,
              reportMessage,
              type: 'report',
              createdAt: newReport.createdAt
          },
      });

  } catch (error) {
      console.error('Error submitting report:', error);
      
      // Handle validation errors specifically
      if (error.name === 'ValidationError') {
          return res.status(400).json({ 
              message: 'Validation failed',
              errors: error.errors 
          });
      }

      res.status(500).json({ 
          message: 'Server error while submitting the report.',
          error: error.message 
      });
  }
});
router.post('/rate', verifyToken, async (req, res) => {
  try {
      const { rating, feedback } = req.body;

      // Validate input
      if (typeof rating !== 'number' || rating < 1 || rating > 5) {
          return res.status(400).json({ message: 'Rating must be a number between 1 and 5.' });
      }

      const userId = req.userId;

      // Fetch profile
      const profile = await Profile.findOne({ userID: userId });
      
      if (!profile) {
          return res.status(403).json({ 
              message: 'You must create a profile before submitting a rating.',
          });
      }

      // Create rating with all required fields including type
      const newRating = new HelpAndSupport({
          userId,
          nameOfTheRater: profile.fullName,
          rating,
          feedback: feedback || '',
          type: 'feedback' // Explicitly set the type
      });

      await newRating.save();

      res.status(201).json({
          message: 'Rating submitted successfully.',
          rating: {
              id: newRating._id,
              userId,
              nameOfTheRater: profile.fullName,
              rating,
              feedback: feedback || '',
              type: 'feedback',
              createdAt: newRating.createdAt
          },
      });

  } catch (error) {
      console.error('Error submitting rating:', error);
      
      // Handle validation errors specifically
      if (error.name === 'ValidationError') {
          return res.status(400).json({ 
              message: 'Validation failed',
              errors: error.errors 
          });
      }

      res.status(500).json({ 
          message: 'Server error while submitting the rating.',
          error: error.message 
      });
  }
});
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
module.exports = router;