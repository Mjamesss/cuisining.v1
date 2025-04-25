const express = require("express");
const Profile = require("../models/Profile");
const User = require("../models/user"); // Import the User model
const mongoose = require("mongoose");
const router = express.Router();

// Route to get merged user data: fullName, cuisiningId, accountCreated, and email
router.get("/user-data", async (req, res) => {
    try {
      // Step 1: Fetch all profiles with required fields
      const profiles = await Profile.find(
        {}, // No filter, fetch all documents
        {
          userID: 1,
          fullName: 1,
          cuisiningId: 1,
          accountCreated: 1,
          _id: 1, // Include the _id field
        }
      );
  
      // Check if any profiles exist
      if (profiles.length === 0) {
        return res.status(404).json({ error: "No profiles found" });
      }
  
      // Step 2: Fetch email for each profile by matching userID
      const userData = await Promise.all(
        profiles.map(async (profile) => {
          const user = await User.findById(profile.userID, { email: 1, _id: 0 }); // Fetch only the email
          return {
            _id: profile._id, // Include the _id field
            fullName: profile.fullName,
            cuisiningId: profile.cuisiningId,
            accountCreated: profile.accountCreated,
            email: user ? user.email : null, // Include email or null if not found
          };
        })
      );
  
      // Step 3: Return the merged data
      res.status(200).json(userData);
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  router.put("/update-name/:userID", async (req, res) => {
    try {
      const { userID } = req.params; // Extract userID (Profile document _id)
      console.log("Received userID:", userID); // Log the userID
  
      // Validate if userID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(400).json({ error: "Invalid userID format" });
      }
  
      // Find the profile by userID and update the fullName
      const updatedProfile = await Profile.findByIdAndUpdate(
        userID,
        { fullName: req.body.fullName },
        { new: true }
      );
  
      if (!updatedProfile) {
        return res.status(404).json({ error: "Profile not found" });
      }
  
      res.status(200).json({
        message: "Profile updated successfully",
        profile: {
          fullName: updatedProfile.fullName,
          cuisiningId: updatedProfile.cuisiningId,
          accountCreated: updatedProfile.accountCreated,
        },
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
module.exports = router;