const mongoose = require('mongoose');

const helpAndSupportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  nameOfTheReporter: { type: String, required: true },  // Changed from fullName
  reportMessage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HelpAndSupport', helpAndSupportSchema);