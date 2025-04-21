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
  
      // Fetch profile (note: your Profile model uses 'userID' with capital D)
      const profile = await Profile.findOne({ userID: userId });  // Changed to userID
      
      if (!profile) {
        return res.status(403).json({ 
          message: 'You must create a profile before submitting a report.',
        });
      }
  
      // Create report with nameOfTheReporter
      const newReport = new HelpAndSupport({
        userId,
        nameOfTheReporter: profile.fullName,  // Using profile's fullName
        reportMessage,
      });
  
      await newReport.save();
  
      res.status(201).json({
        message: 'Report submitted successfully.',
        report: {
          userId,
          nameOfTheReporter: profile.fullName,  // Return new field name
          reportMessage,
        },
      });
  
    } catch (error) {
      console.error('Error submitting report:', error);
      res.status(500).json({ 
        message: 'Server error while submitting the report.',
        error: error.message 
      });
    }
  });
module.exports = router;