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
  transacId: { type: String, required: true },
  amount: { type: String, required: true },
  modeOfPayment: { type: String, required: true },
  paymentDate: { type: Date },  // Add this field
  //final assessment
  finalAssessment1: { type: Boolean, default: false },
});
module.exports = mongoose.model("Profile", profileSchema);