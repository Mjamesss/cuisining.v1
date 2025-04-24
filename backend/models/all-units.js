// models/fundamentals-of-cookery.js

const mongoose = require('mongoose');

const lessonStatusSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  lessonLockStatus: {
    //unit1 Fundamentals of Cookery
    KitchenDepartment: { type: Boolean, default: true },
    CommonKitchenTools: { type: Boolean, default: false },
    MeasurementsAndConversion: { type: Boolean, default: false },
    FoodSafety: { type: Boolean, default: false },
    OccupationalHealthAndSafety: { type: Boolean, default: false },
    KnifeSkills: { type: Boolean, default: false },
    //unit2 PREPARING APPETIZERS
    TypesOfAppetizers: { type: Boolean, default: true },
    KitchenSafety: { type: Boolean, default: false },
    PreparingAppetizers: { type: Boolean, default: false },
    PlatingAppetizers: { type: Boolean, default: false }
  },
  lessonCompletionStatus: {
    //unit1 Fundamentals of Cookery
    KitchenDepartment: { type: Boolean, default: false },
    CommonKitchenTools: { type: Boolean, default: false },
    MeasurementsAndConversion: { type: Boolean, default: false },
    FoodSafety: { type: Boolean, default: false },
    OccupationalHealthAndSafety: { type: Boolean, default: false },
    KnifeSkills: { type: Boolean, default: false },
    //unit2 PREPARING APPETIZERS
    TypesOfAppetizers: { type: Boolean, default: true },
    KitchenSafety: { type: Boolean, default: false },
    PreparingAppetizers: { type: Boolean, default: false },
    PlatingAppetizers: { type: Boolean, default: false }
  }
});

module.exports = mongoose.model('LessonStatus', lessonStatusSchema);