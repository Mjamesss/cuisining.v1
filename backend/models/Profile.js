const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  fullName: { type: String, required: true },
  avatarUrl: [{ type: String }],
  selectedGroup1: { type: String, required: true },
  selectedGroup2: { type: String, required: true },
  hasTakenNCII: { type: Boolean, required: true },
});

module.exports = mongoose.model("Profile", profileSchema);