const express = require('express');
const User = require('../models/user');
const Profile = require('../models/Profile');
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { upload } = require('../config/cloudinaryConfig');
const bcrypt = require("bcryptjs");


router.get('/subscription', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    console.log(`Fetching proAccount status for userID: ${userId}`);

    // Find the user's profile in the database
    const profile = await Profile.findOne({ userID: userId }, 'proAccount'); // Only fetch the `proAccount` field

    if (!profile) {
      console.error(`Profile not found for userID: ${userId}`);
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
        userIdUsed: userId, // For debugging
      });
    }

    console.log(`Pro account status fetched successfully:`, profile.proAccount);
    res.json({
      success: true,
      proAccount: profile.proAccount, // Return the proAccount status
    });
  } catch (error) {
    console.error('Error fetching proAccount status:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch proAccount status',
      error: error.message,
    });
  }
});
router.post('/change-password', verifyToken, [
  check('currentPassword', 'Current password is required').not().isEmpty(),
  check('newPassword', 'New password must be at least 6 characters').isLength({ min: 6 })
], async (req, res) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.userId;

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });

  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/provider', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('provider');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ provider: user.provider });
  } catch (error) {
    console.error('Error getting provider:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Consolidated profile data endpoint
router.get('/settings-profile', verifyToken, async (req, res) => {
  try {
    // Get both user and profile data in parallel for better performance
    const [user, profile] = await Promise.all([
      User.findById(req.userId).select('email'),
      Profile.findOne({ userID: req.userId })
    ]);

    if (!user || !profile) {
      return res.status(404).json({ message: 'User or profile not found' });
    }

    let canUpdate = true;
    let daysRemaining = 0;

    // Only check 35-day rule if user has edited before
    if (profile.hasEditedProfile) {
      const lastUpdated = profile.lastUpdated;
      const nextUpdateDate = new Date(lastUpdated);
      nextUpdateDate.setDate(nextUpdateDate.getDate() + 35);
      daysRemaining = Math.ceil((nextUpdateDate - new Date()) / (1000 * 60 * 60 * 24));
      canUpdate = daysRemaining <= 0;
    }

    res.json({
      ...profile._doc,
      email: user.email,  // Include email from User model
      canUpdate,
      daysRemaining: daysRemaining > 0 ? daysRemaining : 0,
      isFirstEdit: !profile.hasEditedProfile
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/update-profile', verifyToken, upload.single('avatar'), [
  // ... (validation checks remain the same) ...
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const profile = await Profile.findOne({ userID: req.userId });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });

    // FIRST-TIME EDIT LOGIC
    if (!profile.hasEditedProfile) {
      const updatedProfile = await Profile.findOneAndUpdate(
        { userID: req.userId },
        { 
          $set: {
            ...req.body,
            avatarUrl: req.file?.path || profile.avatarUrl,
            lastUpdated: new Date(),
            hasEditedProfile: true // Mark as edited
          }
        },
        { new: true }
      );

      return res.json({
        ...updatedProfile._doc,
        canUpdate: false,
        daysRemaining: 35,
        message: "First edit successful! Next edit available in 35 days."
      });
    }

    // SUBSEQUENT EDITS (35-day rule applies)
    const lastUpdated = profile.lastUpdated;
    const nextUpdateDate = new Date(lastUpdated);
    nextUpdateDate.setDate(nextUpdateDate.getDate() + 35);

    if (new Date() < nextUpdateDate) {
      const daysRemaining = Math.ceil((nextUpdateDate - new Date()) / (1000 * 60 * 60 * 24));
      return res.status(400).json({ 
        message: `You can update your profile in ${daysRemaining} days`,
        daysRemaining
      });
    }

    // Process normal update
    const updateData = {
      ...req.body,
      avatarUrl: req.file?.path || profile.avatarUrl,
      lastUpdated: new Date()
    };

    const updatedProfile = await Profile.findOneAndUpdate(
      { userID: req.userId },
      { $set: updateData },
      { new: true }
    );

    res.json({
      ...updatedProfile._doc,
      canUpdate: false,
      daysRemaining: 35
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Additional endpoints (simplified versions)
router.get("/profile-data", verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userID: req.userId })
      .select('fullName avatarUrl');
      
    res.json({
      fullName: profile?.fullName,
      avatarUrl: profile?.avatarUrl || "https://via.placeholder.com/150"
    });
  } catch (error) {
    console.error("Error in /profile-data:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/avatar", verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userID: req.userId })
      .select('avatarUrl');
      
    res.json({
      avatarUrl: profile?.avatarUrl || "https://via.placeholder.com/150"
    });
  } catch (error) {
    console.error("Error in /avatar:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/cuisining-id", verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userID: req.userId })
      .select('cuisiningId');
      
    res.json({
      cuisiningId: profile?.cuisiningId
    });
  } catch (error) {
    console.error("Error in /cuisining-id:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;