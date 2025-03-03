const express = require('express');
const User = require('../models/user'); // Adjust the path to your User model
const Profile = require('../models/profile');
const verifyToken = require("../middlewares/verifyToken"); // Middleware to verify JWT token
const router = express.Router();

// Route to fetch fName, email, and avatarUrl
router.get('/settings-profile', verifyToken, async (req, res) => {
  try {
    // Use req.userId from verifyToken middleware
    const userId = req.userId;

    // Fetch user data (fName and email) from the User model
    const user = await User.findById(userId).select('fName email');

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Send the fName, email, and avatarUrl as response
    res.json({
      fName: user.fName,
      email: user.email,
    });
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    console.error('Stack Trace:', error.stack); // Log the full stack trace
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Route to fetch profile data
router.get("/profile-data", verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userID: req.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json({
      message: "Profile data retrieved successfully",
      profile: {
        fullName: profile.fullName,
        avatarUrl: profile.avatarUrl || "https://via.placeholder.com/150",
      },
    });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});

// New route to fetch avatarUrl
router.get("/avatar", verifyToken, async (req, res) => {
  try {
    // Use req.userId from verifyToken middleware
    const userId = req.userId;

    // Fetch the profile data for the user
    const profile = await Profile.findOne({ userID: userId }).select('avatarUrl');

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // If avatarUrl exists, return it; otherwise, return a default placeholder URL
    const avatarUrl = profile.avatarUrl || "https://via.placeholder.com/150";

    res.status(200).json({
      message: "Avatar URL retrieved successfully",
      avatarUrl: avatarUrl,
    });
  } catch (error) {
    console.error("Error fetching avatar URL:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});

// New route to fetch cuisiningId
router.get("/cuisining-id", verifyToken, async (req, res) => {
  try {
    // Use req.userId from verifyToken middleware
    const userId = req.userId;

    // Fetch the profile data for the user
    const profile = await Profile.findOne({ userID: userId }).select('cuisiningId');

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // If cuisiningId exists, return it; otherwise, return null or a default value
    const cuisiningId = profile.cuisiningId || null;

    res.status(200).json({
      message: "Cuisining ID retrieved successfully",
      cuisiningId: cuisiningId,
    });
  } catch (error) {
    console.error("Error fetching cuisining ID:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});

module.exports = router;