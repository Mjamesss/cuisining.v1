// routes/game.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile.js'); // Ensure this path is correct
const User = require('../models/user.js'); // Import the User model
const CourseLockStatus = require('../models/course.js');
const verifyToken = require('../middlewares/verifyToken');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

// Helper function to generate a certificate PDF
async function generateCertificatePDF(fullName, courseName, completionDate, certificateId) {
    try {
        // Read the HTML template
        const templatePath = path.join(__dirname, '../cert.html');
        if (!fs.existsSync(templatePath)) {
            throw new Error('Certificate template file not found.');
        }
        let template = fs.readFileSync(templatePath, 'utf8');

        // Replace placeholders in the template
        template = template
            .replace('{{Full Name}}', fullName)
            .replace('{{Course/Program Name}}', courseName)
            .replace('{{Completion Date}}', completionDate)
            .replace('{{Certificate ID}}', certificateId);

        // Launch Playwright
        const browser = await chromium.launch();
        const page = await browser.newPage();

        // Set the content
        await page.setContent(template);

        // Generate PDF with custom dimensions (277mm × 210mm)
        const pdfBuffer = await page.pdf({
            width: '277mm',
            height: '210mm',
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            },
            printBackground: true,
            preferCSSPageSize: false // We're using our explicit dimensions
        });

        await browser.close();

        // Ensure the buffer is not empty
        if (!pdfBuffer || pdfBuffer.length === 0) {
            throw new Error('Failed to generate PDF.');
        }

        return pdfBuffer;
    } catch (error) {
        console.error('Error generating certificate PDF:', error.message);
        throw error;
    }
}

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use Gmail SMTP
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS // Your Gmail app password
    }
});

// Route to mark final assessment as completed and send certificate via email
router.post('/complete-assessment1', verifyToken, async (req, res) => {
  try {
      const userId = req.userId; // From verifyToken middleware

      // Fetch the user's course lock status record
      const userCourseLockStatus = await CourseLockStatus.findOne({ userID: userId });
      if (!userCourseLockStatus) {
          return res.status(404).json({
              success: false,
              message: 'User course lock status record not found'
          });
      }

      // Check if the Final Assessment is already marked as completed
      if (userCourseLockStatus.courseCompletionStatus.FinalAssessment) {
          return res.status(400).json({
              success: false,
              message: 'You have already completed the Final Assessment. No further action is required.'
          });
      }

      // Define the certificate value and generate a unique certificate ID
      const cert = "NCII COOKERY";
      const certificateId = uuidv4();

      // Fetch user details (e.g., email and full name) from the User model
      const user = await User.findById(userId).select('email');
      if (!user) {
          return res.status(404).json({
              success: false,
              message: 'User not found'
          });
      }

      const email = user.email;

      // Fetch the user's profile to get their full name
      const userProfile = await Profile.findOne({ userID: userId });
      if (!userProfile) {
          return res.status(404).json({
              success: false,
              message: 'User profile not found'
          });
      }

      const { fullName } = userProfile;

      // Update the user's course lock status record with the assessment completion
      await CourseLockStatus.updateOne(
          { userID: userId },
          {
              'courseCompletionStatus.FinalAssessment': true // Mark Final Assessment as completed
          }
      );

      // Generate the certificate PDF
      const completionDate = new Date().toLocaleDateString();
      const pdfBuffer = await generateCertificatePDF(fullName, cert, completionDate, certificateId);

      // Send the certificate via email
      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Congratulations! Your Certificate is Ready',
          text: `Dear ${fullName},\n\nCongratulations on completing the ${cert} course! Your certificate is attached to this email.\n\nCertificate ID: ${certificateId}\nCompletion Date: ${completionDate}`,
          attachments: [
              {
                  filename: 'certificate.pdf',
                  content: pdfBuffer
              }
          ]
      };

      await transporter.sendMail(mailOptions);

      res.json({
          success: true,
          message: 'Final assessment marked as completed. Certificate sent to your email.',
          courseCompletionStatus: {
              FinalAssessment: true // Include the updated status in the response
          }
      });

  } catch (error) {
      console.error('Update error:', error.message);
      res.status(500).json({
          success: false,
          message: 'Database operation or email sending failed',
          error: error.message
      });
  }
});


router.post('/complete-assessment2', verifyToken, async (req, res) => {
  try {
      const userId = req.userId; // From verifyToken middleware

      // Fetch the user's profile to check if they've already completed the assessment
      const userProfile = await Profile.findOne({ userID: userId });
      if (!userProfile) {
          return res.status(404).json({
              success: false,
              message: 'User profile not found'
          });
      }

      // Check if the assessment is already marked as completed
      if (userProfile.finalAssessment2) {
          return res.status(400).json({
              success: false,
              message: 'You have already completed this assessment. No further action is required.'
          });
      }

      // Define the certificate value and generate a unique certificate ID
      const cert = "Knife Skills"; // Course name
      const certificateId = uuidv4(); // Generate a unique ID for the certificate

      // Fetch user details (e.g., email and full name) from the User model
      const user = await User.findById(userId).select('email');
      if (!user) {
          return res.status(404).json({
              success: false,
              message: 'User not found'
          });
      }

      const email = user.email;
      const { fullName } = userProfile;

      // Update the user's profile with the assessment completion and certificate details
      await Profile.updateOne(
          { userID: userId },
          {
              finalAssessment2: true,
              certificate: cert, // Add the certificate field
              certificateId: certificateId, // Save the unique certificate ID
              lastUpdated: new Date()
          }
      );

      // Generate the certificate PDF
      const completionDate = new Date().toLocaleDateString();
      const pdfBuffer = await generateCertificatePDF(fullName, cert, completionDate, certificateId);

      // Send the certificate via email
      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email, // Use the email from the User model
          subject: 'Congratulations! Your Certificate is Ready',
          text: `Dear ${fullName},\n\nCongratulations on completing the ${cert} course! Your certificate is attached to this email.\n\nCertificate ID: ${certificateId}\nCompletion Date: ${completionDate}`,
          attachments: [
              {
                  filename: 'certificate.pdf',
                  content: pdfBuffer
              }
          ]
      };

      await transporter.sendMail(mailOptions);

      res.json({
          success: true,
          message: 'Final assessment marked as completed. Certificate sent to your email.',
          finalAssessment2: true,
          certificate: cert,
          certificateId: certificateId
      });

  } catch (error) {
      console.error('Update error:', error.message);
      res.status(500).json({
          success: false,
          message: 'Database operation or email sending failed',
          error: error.message
      });
  }
});

module.exports = router;