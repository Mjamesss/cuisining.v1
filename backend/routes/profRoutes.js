const express = require("express");
const { upload, cloudinary } = require("../config/cloudinaryConfig"); // Import cloudinary
const verifyToken = require("../middlewares/verifyToken");
const Profile = require("../models/Profile");

const router = express.Router();

router.post("/upload-avatar", upload.single("avatar"), async (req, res) => {
  try {
    const { userId } = req.body; // Ensure this is a valid ObjectId

    // Validate required fields
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    let imageUrl = ""; // Initialize the imageUrl

    if (req.file) {
      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url; // Get the secure Cloudinary URL
      console.log("Cloudinary URL:", imageUrl); // Log the Cloudinary URL

      // Save the avatar URL to the user's profile in the database
      const profile = await Profile.findOneAndUpdate(
        { userID: userId }, // Find profile by userID
        { $push: { avatarUrl: imageUrl } }, // Add the new URL to the array
        { new: true, upsert: true } // Return the updated profile, create if it doesn't exist
      );

      if (!profile) {
        return res.status(404).json({ error: "Profile not found." });
      }

      console.log("Updated Profile:", profile); // Log the updated profile
      res.status(201).json({
        message: "Avatar uploaded successfully",
        avatarUrl: imageUrl, // Return the Cloudinary URL
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
router.post("/submit", verifyToken, async (req, res) => {
    const { fullName, avatarUrl, selectedGroup1, selectedGroup2, hasTakenNCII } = req.body;
  
    console.log("Received data:", req.body); // Log the received data
  
    // Validate required fields
    if (!fullName || !selectedGroup1 || !selectedGroup2 || hasTakenNCII === undefined) {
      return res.status(400).json({ message: "All fields except avatarUrl are required" });
    }
  
    try {
      // Create a new profile for the user
      const newProfile = new Profile({
        userID: req.userId, // Use req.userId from verifyToken middleware
        fullName,
        avatarUrl: avatarUrl || [], // Ensure avatarUrl is an array
        selectedGroup1,
        selectedGroup2,
        hasTakenNCII,
      });
  
      await newProfile.save();
      res.status(200).json({ message: "Profile setup successful", profile: newProfile });
    } catch (error) {
      console.error("Error setting up profile:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
module.exports = router;