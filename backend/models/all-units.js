// models/fundamentals-of-cookery.js

const mongoose = require('mongoose');
const { Touchscreen } = require('puppeteer');

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
    PlatingAppetizers: { type: Boolean, default: false },
    // Unit 3: Egg Dishes, Vegetables, and Farinaceous Products
    EggDishesIntro: { type: Boolean, default: true }, // First lesson always unlocked
    CookingEggDishes: { type: Boolean, default: false },
    VegetablesIntro: { type: Boolean, default: false },
    PreparingVegetables: { type: Boolean, default: false },
    CookingVegetables: { type: Boolean, default: false },
    FarinaceousIntro: { type: Boolean, default: false },
    PotatoDishes: { type: Boolean, default: false },
    RiceDishes: { type: Boolean, default: false },
    PastaDishes: { type: Boolean, default: false }
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
    TypesOfAppetizers: { type: Boolean, default: false },
    KitchenSafety: { type: Boolean, default: false },
    PreparingAppetizers: { type: Boolean, default: false },
    PlatingAppetizers: { type: Boolean, default: false },
    // Unit 3: Egg Dishes, Vegetables, and Farinaceous Products
    EggDishesIntro: { type: Boolean, default: false },
    CookingEggDishes: { type: Boolean, default: false },
    VegetablesIntro: { type: Boolean, default: false },
    PreparingVegetables: { type: Boolean, default: false },
    CookingVegetables: { type: Boolean, default: false },
    FarinaceousIntro: { type: Boolean, default: false },
    PotatoDishes: { type: Boolean, default: false },
    RiceDishes: { type: Boolean, default: false },
    PastaDishes: { type: Boolean, default: false }
  }
});

module.exports = mongoose.model('LessonStatus', lessonStatusSchema);