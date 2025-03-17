const express = require("express");
const mongoose = require("mongoose");
const Profile = require("../models/profile"); // Import the Profile model
const Notification = require("../models/Notification"); // Import the Notification model

const router = express.Router();

// POST /api/notifications - Create a new notification
router.post("/notifications", async (req, res) => {
    try {
      const { message, type, link, recipientType, cuisiningIds } = req.body;
  
      // Validate input
      if (!message || !type || !recipientType) {
        return res.status(400).json({ error: "Message, type, and recipient type are required." });
      }
  
      // Find recipients based on recipientType
      let recipients = [];
      if (recipientType === "all") {
        // Fetch all users from the Profile collection
        const allProfiles = await Profile.find({}, "_id");
        recipients = allProfiles.map((profile) => profile._id);
      } else if (recipientType === "custom" && cuisiningIds && cuisiningIds.length > 0) {
        // Fetch specific users by cuisiningId
        const profiles = await Profile.find({ cuisiningId: { $in: cuisiningIds } }, "_id");
        recipients = profiles.map((profile) => profile._id);
      } else {
        return res.status(400).json({ error: "Invalid recipient type or missing cuisiningIds." });
      }
  
      // Create the notification
      const notification = new Notification({
        message,
        type,
        link,
        recipients,
        recipientType, // Save the recipientType
      });
  
      await notification.save();
  
      // Return the created notification
      res.status(201).json(notification);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while creating notification." });
    }
  });

// GET /api/notifications - Retrieve all notifications// GET /api/notifications - Retrieve all notifications
router.get("/notifications", async (req, res) => {
    try {
      // Fetch all notifications and populate the recipients with cuisiningId
      const notifications = await Notification.find().populate({
        path: 'recipients',
        select: 'cuisiningId', // Only fetch the cuisiningId field
      });
  
      if (!notifications || notifications.length === 0) {
        return res.status(404).json({ message: "No notifications found." });
      }
  
      // Map the recipients to their cuisiningId or set to "All Users"
      const formattedNotifications = notifications.map(notification => ({
        ...notification._doc,
        recipients:
          notification.recipientType === 'all'
            ? 'All Users'
            : notification.recipients.map(recipient => recipient.cuisiningId).join(', '),
      }));
  
      // Return the formatted notifications
      res.status(200).json(formattedNotifications);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while retrieving notifications." });
    }
  });

// POST /api/check-user - Check if a user exists
router.post("/check-user", async (req, res) => {
  try {
    const { cuisiningId } = req.body;

    // Validate input
    if (!cuisiningId) {
      return res.status(400).json({ error: "Cuisining ID is required." });
    }

    // Check if the user exists
    const user = await Profile.findOne({ cuisiningId });

    if (!user) {
      return res.status(404).json({ error: "No user found." });
    }

    // Return the user details
    res.status(200).json(user); // Return the user object directly
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while checking user." });
  }
});

module.exports = router;