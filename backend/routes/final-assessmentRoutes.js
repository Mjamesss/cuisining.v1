// routes/game.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const verifyToken = require('../middlewares/verifyToken');

// Route to mark final assessment as completed
router.post('/complete-assessment1', verifyToken, async (req, res) => {
  try {
    const userId = req.userId; // From verifyToken middleware
    
    const updatedProfile = await Profile.findOneAndUpdate(
      { userID: userId },
      { 
        finalAssessment1: true,
        lastUpdated: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ 
        success: false,
        message: 'Profile not found'
      });
    }

    res.json({ 
      success: true,
      message: 'Final assessment 1 marked as completed',
      finalAssessment1: updatedProfile.finalAssessment1
    });

  } catch (error) {
    console.error('Update error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Database operation failed',
      error: error.message
    });
  }
});

module.exports = router;