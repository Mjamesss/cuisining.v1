const express = require("express");
const { upload, cloudinary } = require("../config/cloudinaryConfig");
const verifyToken = require("../middlewares/verifyToken");
const Profile = require("../models/Profile");
const User = require("../models/user"); // Import the User model
const checkProfileCustomized = require("../middlewares/checkProfileCustomized");

const router = express.Router();

// Route to upload avatar
router.post("/upload-avatar", upload.single("avatar"), async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;

      const profile = await Profile.findOneAndUpdate(
        { userID: userId },
        { $push: { avatarUrl: imageUrl } },
        { new: true, upsert: true }
      );

      if (!profile) {
        return res.status(404).json({ error: "Profile not found." });
      }

      res.status(201).json({
        message: "Avatar uploaded successfully",
        avatarUrl: imageUrl,
        profile,
      });
    } else {
      return res.status(400).json({ error: "No file uploaded." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Route to submit profile data
router.post("/submit", verifyToken, async (req, res) => {
    const { fullName, avatarUrl, selectedGroup1, selectedGroup2, hasTakenNCII } = req.body;
  
    console.log("Received data:", req.body);
  
    if (!fullName || !selectedGroup1 || !selectedGroup2 || hasTakenNCII === undefined) {
      return res.status(400).json({ message: "All fields except avatarUrl are required" });
    }
  
    try {
      // Create a new profile for the user
      const newProfile = new Profile({
        userID: req.userId, // Use req.userId from verifyToken middleware
        fullName,
        avatarUrl: avatarUrl || [],
        selectedGroup1,
        selectedGroup2,
        hasTakenNCII,
      });
  
      await newProfile.save();
  
      // Update the user's profile customization status
      const updatedUser = await User.findByIdAndUpdate(
        req.userId,
        { isProfileCustomized: true },
        { new: true } // Return the updated document
      );
  
      console.log("Updated user:", updatedUser); // Log the updated user
  
      res.status(200).json({ message: "Profile setup successful", profile: newProfile });
    } catch (error) {
      console.error("Error setting up profile:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  router.get("/profile", verifyToken, async (req, res) => {
    try {
      const user = await User.findById(req.userId); // req.userId comes from verifyToken middleware
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("User profile customization status:", user.isProfileCustomized); // Log the status
      res.status(200).json({ isProfileCustomized: user.isProfileCustomized });
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  });

module.exports = router;