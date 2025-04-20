// models/profile.js
const profileSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
    finalAssessment1: { type: Boolean, default: false },
  });