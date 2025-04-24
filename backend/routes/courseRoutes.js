const express = require('express');
const CourseLockStatus = require('../models/course'); // Make sure path is correct
const verifyToken = require('../middlewares/verifyToken');
const LessonStatus = require('../models/all-units');

const router = express.Router();

router.post('/complete-final-unit', verifyToken, async (req, res) => {
  try {
      const { unitName } = req.body; // 'KnifeSkills' for Fundamentals
      const userId = req.userId;

      // 1. Hardcoded mapping of final units to courses
      const FINAL_UNITS = {
          'KnifeSkills': {
              courseName: 'FundamentalsOfCookery',
              lessonName: 'KnifeSkills'
          },
          // Add other courses' final units when needed:
          // 'AppetizerFinal': {
          //     courseName: 'PreparingAppetizers',
          //     lessonName: 'AppetizerFinal'
          // }
      };

      // 2. Verify this is a valid final unit
      const unitInfo = FINAL_UNITS[unitName];
      if (!unitInfo) {
          return res.status(400).json({ 
              error: "Not a valid final unit" 
          });
      }

      const { courseName, lessonName } = unitInfo;

      // 3. Update lesson completion status (KnifeSkills)
      await LessonStatus.findOneAndUpdate(
          { userID: userId },
          { 
              $set: { 
                  [`lessonCompletionStatus.${lessonName}`]: true,
                  [`lessonLockStatus.${lessonName}`]: true 
              },
              $setOnInsert: { userID: userId } // Only set on insert
          },
          { upsert: true }
      );

      // 4. Mark the course as completed
      const updatedStatus = await CourseLockStatus.findOneAndUpdate(
          { userID: userId },
          { 
              $set: { 
                  [`courseCompletionStatus.${courseName}`]: true 
              } 
          },
          { new: true, upsert: true }
      );

      // 5. Check if ALL courses are completed (AND gate)
      const REQUIRED_COURSES = [
          'FundamentalsOfCookery',
          'PreparingAppetizers',
          'PreparingEggVegetable',
          'SaladAndSaladDressing',
          'PreparingSandwich'
      ];

      const allCompleted = REQUIRED_COURSES.every(
          course => updatedStatus.courseCompletionStatus[course] === true
      );

      // 6. Unlock FinalAssessment if all done
      let finalUnlocked = false;
      if (allCompleted) {
          await CourseLockStatus.updateOne(
              { userID: userId },
              { $set: { 'courseLockStatus.FinalAssessment': true } }
          );
          finalUnlocked = true;
      }

      res.status(200).json({
          success: true,
          lessonCompleted: lessonName,
          courseCompleted: courseName,
          allCoursesCompleted: allCompleted,
          finalAssessmentUnlocked: finalUnlocked
      });

  } catch (error) {
      res.status(500).json({ 
          error: error.message 
      });
  }
});
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
  router.get('/course-completion', verifyToken, async (req, res) => {
    try {
        // Use the CourseLockStatus model since it contains courseCompletionStatus field
        const status = await CourseLockStatus.findOne({ userID: req.userId });
        
        // If not found, return default (all false)
        if (!status) {
            return res.status(200).json({
                FundamentalsOfCookery: false,
                PreparingAppetizers: false,
                PreparingEggVegetable: false,
                SaladAndSaladDressing: false,
                PreparingSandwich: false,
                FinalAssessment: false
            });
        }
        
        // Return the found status
        res.status(200).json(status.courseCompletionStatus);
    } catch (error) {
        console.error('Error in /course-completion:', error);
        res.status(500).json({ error: error.message });
    }
});
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
  
  // Add this to your routes file (likely routes.js or similar)
router.get('/course/fundamentalsofcokery/status', verifyToken, async (req, res) => {
    try {
      const userId = req.userId; // Extract user ID from the token
  
      // Find the user's lesson status record
      let lessonStatus = await LessonStatus.findOne({ userID: userId });
  
      // If no record exists, create default values
      if (!lessonStatus) {
        lessonStatus = {
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
        };
      }
  
      // Return the statuses
      res.status(200).json({
        lessonLockStatus: lessonStatus.lessonLockStatus,
        lessonCompletionStatus: lessonStatus.lessonCompletionStatus
      });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;