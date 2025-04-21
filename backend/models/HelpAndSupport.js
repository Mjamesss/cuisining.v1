const mongoose = require('mongoose');

const helpAndSupportSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  // Fields for reporting
  nameOfTheReporter: { 
    type: String, 
    required: function() { return this.type === 'report'; } 
  },
  reportMessage: { 
    type: String, 
    required: function() { return this.type === 'report'; } 
  },
  // Fields for rating (1-5 stars)
  nameOfTheRater: { 
    type: String, 
    required: function() { return this.type === 'rating'; } 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: function() { return this.type === 'rating'; } 
  },
  feedback: { 
    type: String, 
    default: '' 
  },
  // Common fields
  type: { 
    type: String, 
    enum: ['report', 'feedback'], 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model('HelpAndSupport', helpAndSupportSchema);