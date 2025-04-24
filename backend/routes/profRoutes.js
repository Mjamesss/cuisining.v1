const express = require("express");
const { upload, cloudinary } = require("../config/cloudinaryConfig");
const verifyToken = require("../middlewares/verifyToken");
const Profile = require('../models/profile');

const User = require("../models/user"); // Import the User model
const multer = require('multer');
const checkProfileCustomized = require("../middlewares/checkProfileCustomized");
const moment = require("moment-timezone");


const router = express.Router();

  router.post("/upload-avatar", upload.single("avatar"), async (req, res) => {
    try {
      const { userId } = req.body;
      if (!userId) {
        console.error("User ID missing in request body");
        return res.status(400).json({ error: "User ID is required." });
      }
      console.log("Received user ID:", userId); // Log the user ID

      if (req.file) {
        try {
          const result = await cloudinary.uploader.upload(req.file.path);
          const imageUrl = result.secure_url;

          const profile = await Profile.findOneAndUpdate(
            { userID: userId },
            { avatarUrl: imageUrl },
            { new: true, upsert: true }
          );

          console.log("Updated profile:", profile); // Log the updated profile
          res.status(201).json({
            message: "Avatar uploaded successfully",
            avatarUrl: imageUrl,
            profile,
          });
        } catch (cloudinaryError) {
          console.error("Cloudinary upload error:", cloudinaryError);
          return res.status(500).json({ error: "Error uploading image to Cloudinary", details: cloudinaryError.message });
        }
      } else {
        console.error("No file uploaded in request");
        return res.status(400).json({ error: "No file uploaded." });
      }
    } catch (error) {
      console.error("Error in /upload-avatar route:", error);
      res.status(500).json({ error: "Server error", details: error.message });
    }
  });
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
  router.post("/submit", verifyToken, async (req, res) => {
    console.log("Request body:", req.body);
    console.log("User ID from token:", req.userId);
  
    const { fullName, avatarUrl, selectedGroup1, selectedGroup2, hasTakenNCII, region, country, contactNo, gender } = req.body;
  
    if (!fullName || !selectedGroup1 || !selectedGroup2 || hasTakenNCII === undefined || 
        !region || !country || !contactNo || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const generateCuisiningId = () => {
        const randomPart = Math.floor(Math.random() * 10000000)
          .toString()
          .padStart(7, "0");
        return `88${randomPart}`;
      };
  
      let cuisiningId;
      let isUnique = false;
  
      while (!isUnique) {
        cuisiningId = generateCuisiningId();
        const existingProfile = await Profile.findOne({ cuisiningId });
        if (!existingProfile) {
          isUnique = true;
        }
      }
  
      // Set Philippine Time for accountCreated
      const accountCreated = moment.tz("Asia/Manila").toDate();
  
      const newProfile = new Profile({
        userID: req.userId,
        fullName,
        avatarUrl: avatarUrl || [],
        selectedGroup1,
        selectedGroup2,
        hasTakenNCII,
        cuisiningId,
        accountCreated,
        region,
        country,
        contactNo,
        gender
      });
  
      await newProfile.save();
      console.log("Profile saved successfully:", newProfile);
  
      // Update the User document
      const updatedUser = await User.findByIdAndUpdate(
        req.userId,
        { 
          isProfileCustomized: true,
          isFirstLogin: false // Update isFirstLogin to false
        },
        { new: true }
      );
  
      console.log("User updated successfully:", updatedUser);
      res.status(200).json({ message: "Profile setup successful", profile: newProfile });
    } catch (error) {
      console.error("Error in /submit route:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId); // req.userId comes from verifyToken middleware
    console.log("User Object:", user); // Log the user object for debugging

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return consistent profile data, including profilePicture
    res.status(200).json({
      fName: user.fName || "",
      email: user.email || "",
      isProfileCustomized: user.isProfileCustomized,
      profilePicture: user.profilePicture, // Explicitly include the profilePicture field
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});
router.get("/gprof", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId); // req.userId comes from verifyToken middleware

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return only the profilePicture field
    res.status(200).json({
      profilePicture: user.profilePicture || "https://res.cloudinary.com/dm6wodni6/image/upload/v1739967728/account_nhrb9f.png", // Default if no picture
    });
  } catch (error) {
    console.error("Error fetching profile picture:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});
module.exports = router;