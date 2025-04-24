const express = require("express");
const mongoose = require("mongoose");
const Profile = require("../models/Profile"); // Import the Profile model
const Notification = require("../models/Notification"); // Import the Notification model
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.get('/get-notifications', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const notifications = await Notification.find({ recipients: userId }).sort({ date: -1 });

    // Ensure the date field is in the correct format
    const formattedNotifications = notifications.map((notif) => ({
      ...notif._doc,
      date: { $date: notif.date.toISOString() }, // Convert date to ISO string
    }));

    res.json(formattedNotifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error });
  }
});
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
       const allProfiles = await Profile.find ({}, "userID");
       recipients = allProfiles.map((profile) => profile.userID);
      }else if (recipientType === "custom" && cuisiningIds && cuisiningIds.length > 0){
        const profile = await Profile.find({ cuisiningId: { $in: cuisiningIds}}, "userID")
        recipients = profile.map ((profile) => profile.userID)
      
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