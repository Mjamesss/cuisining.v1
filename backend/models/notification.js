const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  type: { type: String, enum: ["update", "new", "reminder"], required: true },
  link: { type: String },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }], // Array of user IDs
  recipientType: { type: String, enum: ["all", "custom"], required: true }, // Add this line
  date: { type: Date, default: Date.now },
});

// Export the Notification model
module.exports = mongoose.model("Notification", notificationSchema);