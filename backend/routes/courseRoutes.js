const express = require('express');
const CourseLockStatus = require('../models/course'); // Make sure path is correct
const verifyToken = require('../middlewares/verifyToken');
const LessonStatus = require('../models/fundametals-of-cookery');

const router = express.Router();

// GET course lock status for authenticated user
router.get('/course-stats', verifyToken, async (req, res) => {
    try {
      const status = await CourseLockStatus.findOne({ userID: req.userId });
      res.status(200).json(status?.courseLockStatus || {
        FundamentalsOfCookery: true,
        PreparingAppetizers: false,
        PreparingEggVegetable: false,
        SaladAndSaladDressing: false,
        PreparingSandwich: false,
        FinalAssessment: false
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // POST /course/fundamentalsofcokery/update
// POST /course/fundamentalsofcokery/update
router.post('/course/fundamentalsofcokery/update', verifyToken, async (req, res) => {
    try {
      const { lessonName } = req.body; // Get the lesson name from the request body
      const userId = req.userId; // Extract user ID from the token
  
      // Find the user's lesson status record
      let lessonStatus = await LessonStatus.findOne({ userID: userId });
  
      // If no record exists, create a new one with default values
      if (!lessonStatus) {
        lessonStatus = new LessonStatus({
          userID: userId,
          lessonLockStatus: {
            KitchenDepartment: true,
            CommonKitchenTools: false,
            MeasurementsAndConversion: false,
            FoodSafety: false,
            OccupationalHealthAndSafety: false,
            KnifeSkills: false
          },
          lessonCompletionStatus: {
            KitchenDepartment: false,
            CommonKitchenTools: false,
            MeasurementsAndConversion: false,
            FoodSafety: false,
            OccupationalHealthAndSafety: false,
            KnifeSkills: false
          }
        });
      }
  
      // Mark the current lesson as completed
      lessonStatus.lessonCompletionStatus[lessonName] = true;
  
      // Define the order of lessons
      const lessonsOrder = [
        'KitchenDepartment',
        'CommonKitchenTools',
        'MeasurementsAndConversion',
        'FoodSafety',
        'OccupationalHealthAndSafety',
        'KnifeSkills'
      ];
  
      // Find the index of the current lesson
      const currentIndex = lessonsOrder.indexOf(lessonName);
  
      // Unlock the next lesson if available
      if (currentIndex < lessonsOrder.length - 1) {
        const nextLesson = lessonsOrder[currentIndex + 1];
        lessonStatus.lessonLockStatus[nextLesson] = true;
      }
  
      // Save the updated lesson status to the database
      await lessonStatus.save();
  
      // Return the updated statuses
      res.status(200).json({
        lessonLockStatus: lessonStatus.lessonLockStatus,
        lessonCompletionStatus: lessonStatus.lessonCompletionStatus
      });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;