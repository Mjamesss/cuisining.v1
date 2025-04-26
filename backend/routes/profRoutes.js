const express = require("express");
const { upload, cloudinary } = require("../config/cloudinaryConfig");
const verifyToken = require("../middlewares/verifyToken");
const User = require("../models/user"); // Import the User model
const multer = require('multer');
const checkProfileCustomized = require("../middlewares/checkProfileCustomized");
const moment = require("moment-timezone");
const path = require('path');
const Profile = require('../models/Profile');
const LessonStatus = require('../models/all-units');


const router = express.Router();

router.get("/progress", verifyToken, async (req, res) => {
  try {
    // Extract user ID from the request (assuming it's available in the token)
    const userId = req.userId; // Consistent variable name

    // Fetch the user's lesson status from the LessonStatus model
    const lessonStatus = await LessonStatus.findOne({ userID: userId });

    if (!lessonStatus) {
      return res.status(404).json({ message: "Lesson status not found" });
    }

    // Fetch the user's profile from the Profile model
    const userProfile = await Profile.findOne({ userID: userId });

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    // Extract lesson completion status from LessonStatus
    const { lessonCompletionStatus } = lessonStatus;

    // Convert lessonCompletionStatus to an array of objects
    const progress = Object.keys(lessonCompletionStatus).map((lesson) => ({
      name: lesson,
      completed: lessonCompletionStatus[lesson],
    }));

    // Add Final Assessment status from the Profile model
    const finalAssessmentCompleted = userProfile.finalAssessmentCompleted || false;
    progress.push({ name: "finalAssessment1", completed: finalAssessmentCompleted });

    // Count the number of completed lessons
    const completedCount = progress.filter((lesson) => lesson.completed).length;

    // Calculate the total number of lessons
    const totalCount = progress.length;

    // Calculate the equivalent score (percentage-based)
    const equivalentScore = Math.round((completedCount / totalCount) * 100);

    // Group lessons by modules
    const groupedProgress = {
      "Fundamentals of Professional Cookery": progress.filter(
        (lesson) =>
          [
            "KitchenDepartment",
            "CommonKitchenTools",
            "MeasurementsAndConversion",
            "FoodSafety",
            "OccupationalHealthAndSafety",
            "KnifeSkills",
          ].includes(lesson.name)
      ),
      "Preparing Appetizers and Hors d’oeuvres": progress.filter(
        (lesson) =>
          ["TypesOfAppetizers", "KitchenSafety", "PreparingAppetizers", "PlatingAppetizers"].includes(
            lesson.name
          )
      ),
      "Final Assessment": progress.filter((lesson) => lesson.name === "finalAssessment1"),
    };

    // Define image URLs for each module
    const moduleImages = {
      "Fundamentals of Professional Cookery":
        "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_72_oawnk6.png",
      "Preparing Appetizers and Hors d’oeuvres":
        "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_73_oawnk6.png",
      "Final Assessment":
        "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_74_oawnk6.png",
    };

    // Calculate module progress percentages
    const modules = Object.keys(groupedProgress).map((module) => {
      const lessonsInModule = groupedProgress[module];
      const completedLessons = lessonsInModule.filter((lesson) => lesson.completed).length;
      const totalLessons = lessonsInModule.length;
      const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      return {
        title: module,
        progress: progressPercentage,
        image: moduleImages[module], // Use the predefined image for the module
      };
    });

    // Return the response
    res.status(200).json({
      message: "Lesson progress fetched successfully",
      modules,
      equivalentScore,
    });
  } catch (error) {
    console.error("Error fetching lesson progress:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

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