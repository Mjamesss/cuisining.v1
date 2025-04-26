// models/courseLockStatus.js

const mongoose = require('mongoose');

// Define the schema for the course lock status
const courseLockStatusSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
    courseLockStatus: {
      FundamentalsOfCookery: { type: Boolean, default: true },
      PreparingAppetizers: { type: Boolean, default: false },
      FinalAssessment: { type: Boolean, default: false }
    },
    courseCompletionStatus: {
      FundamentalsOfCookery: { type: Boolean, default: false },
      PreparingAppetizers: { type: Boolean, default: false },
      FinalAssessment: { type: Boolean, default: false }
  }
  });
// Create the Mongoose model
const CourseLockStatus = mongoose.model('CourseLockStatus', courseLockStatusSchema);

module.exports = CourseLockStatus;