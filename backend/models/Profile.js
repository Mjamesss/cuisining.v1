const mongoose = require("mongoose");
const moment = require("moment-timezone");

const profileSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  fullName: { type: String, required: true },
  avatarUrl: [{ type: String }],
  selectedGroup1: { type: String, required: true },
  selectedGroup2: { type: String, required: true },
  hasTakenNCII: { type: Boolean, required: true },
  cuisiningId: { type: String, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  contactNo: { type: String, required: true },
  gender: { type: String, required: true },
  accountCreated: { type: Date },
  lastUpdated: { type: Date },
  hasEditedProfile: { type: Boolean, default: false },
  //paypal
  proAccount: { type: Boolean, default: false },
  transacId: { type: String, required: false },
  amount: { type: String, required: false },
  modeOfPayment: { type: String, required: false },
  paymentDate: { type: Date },  // Add this field
  //final assessment
  finalAssessment1: { type: Boolean, default: false },
});

profileSchema.post('save', async function(user) {
  if (user.proAccount) {
    console.log("Pro account detected. Unlocking courses...");
    const CourseLockStatus = require('./course'); // Correct import

    try {
      const result = await CourseLockStatus.findOneAndUpdate(
        { userID: user._id },
        { 
          $set: {
            'courseLockStatus.PreparingAppetizers': true,
            'courseLockStatus.PreparingEggVegetable': true,
            'courseLockStatus.SaladAndSaladDressing': true,
            'courseLockStatus.PreparingSandwich': true
          }
        },
        { upsert: true, new: true }
      );
      console.log("CourseLockStatus updated:", result);
    } catch (error) {
      console.error("Error updating CourseLockStatus:", error);
    }
  }
});
module.exports = mongoose.model("Profile", profileSchema);