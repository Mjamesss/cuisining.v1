const mongoose = require('mongoose');

const lessonStatusSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  lessonLockStatus: {
    // Unit 1: Fundamentals of Cookery
    KitchenDepartment: { type: Boolean, default: true },
    CommonKitchenTools: { type: Boolean, default: false },
    MeasurementsAndConversion: { type: Boolean, default: false },
    FoodSafety: { type: Boolean, default: false },
    OccupationalHealthAndSafety: { type: Boolean, default: false },
    KnifeSkills: { type: Boolean, default: false },
    
    // Unit 2: Preparing Appetizers
    TypesOfAppetizers: { type: Boolean, default: true },
    KitchenSafety: { type: Boolean, default: false },
    PreparingAppetizers: { type: Boolean, default: false },
    PlatingAppetizers: { type: Boolean, default: false },
    
    // Unit 3: Salad and Salad Dressings
    Unit31: { type: Boolean, default: true },  // Types and Components of Salad
    Unit32: { type: Boolean, default: false }, // Kitchen Safety and Sanitation
    Unit33: { type: Boolean, default: false }, // Preparing Salad Dressings
    Unit34: { type: Boolean, default: false }, // Preparing Salad
    Unit35: { type: Boolean, default: false }  // Plating and Storing Salads
  },
  lessonCompletionStatus: {
    // Unit 1: Fundamentals of Cookery
    KitchenDepartment: { type: Boolean, default: false },
    CommonKitchenTools: { type: Boolean, default: false },
    MeasurementsAndConversion: { type: Boolean, default: false },
    FoodSafety: { type: Boolean, default: false },
    OccupationalHealthAndSafety: { type: Boolean, default: false },
    KnifeSkills: { type: Boolean, default: false },
    
    // Unit 2: Preparing Appetizers
    TypesOfAppetizers: { type: Boolean, default: false },
    KitchenSafety: { type: Boolean, default: false },
    PreparingAppetizers: { type: Boolean, default: false },
    PlatingAppetizers: { type: Boolean, default: false },
    
    // Unit 3: Salad and Salad Dressings
    Unit31: { type: Boolean, default: false },
    Unit32: { type: Boolean, default: false },
    Unit33: { type: Boolean, default: false },
    Unit34: { type: Boolean, default: false },
    Unit35: { type: Boolean, default: false }
  }
});

module.exports = mongoose.model('LessonStatus', lessonStatusSchema);