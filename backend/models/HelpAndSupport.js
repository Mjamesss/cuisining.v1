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
    required: function() { return this.type === 'report'; },
    maxlength: 60
  },
  // Fields for rating (1-5 stars)
  nameOfTheRater: { 
    type: String, 
    required: function() { return this.type === 'feedback'; } 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: function() { return this.type === 'feedback'; },
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  feedback: { 
    type: String, 
    default: '',
    maxlength: 60
  },
  // Common fields
  type: { 
    type: String, 
    enum: ['report', 'feedback'], 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    index: { expires: '90d' } // Auto-delete after 90 days for cleanup
  },
  // Add status field for tracking
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'resolved'],
    default: 'pending'
  }
});

// Add index for faster cooldown checks
helpAndSupportSchema.index({ userId: 1, type: 1, createdAt: -1 });

module.exports = mongoose.model('HelpAndSupport', helpAndSupportSchema);