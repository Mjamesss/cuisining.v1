const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true, // Ensure usernames are unique
    sparse: true, // Allow null values without triggering unique constraint
  },
  password: {
    type: String,
    required: function () {
      return this.provider === "Cuisining"; // Password is required only for Cuisining provider
    },
  },
  provider: {
    type: String,
    required: true,
    enum: ["Cuisining", "Google", "Facebook"], // Allowed providers
    default: "Cuisining", // Default provider for signups
  },
  isProfileCustomized: {
    type: Boolean,
    default: false,
  },
  profilePicture: {
    type: String,
    default: "https://res.cloudinary.com/dm6wodni6/image/upload/v1745644030/account_kq1gfw.png", 
  },
  googleId: String,
  email: String,
  isProfileCustomized: { type: Boolean, default: false },
  isFirstLogin: { type: Boolean, default: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;