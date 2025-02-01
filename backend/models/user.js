const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isProfileCustomized: {
    type: Boolean,
    default: false, // Default to false
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;