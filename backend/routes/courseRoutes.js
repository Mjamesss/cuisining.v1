const express = require('express');
const CourseLockStatus = require('../models/course'); // Make sure path is correct
const verifyToken = require('../middlewares/verifyToken');
const LessonStatus = require('../models/all-units');

const router = express.Router();

router.get('/course/fundamentalsofcokery/status', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    let lessonStatus = await LessonStatus.findOne({ userID: userId });

    if (!lessonStatus) {
      lessonStatus = {
        lessonLockStatus: {
          // Unit 1
          KitchenDepartment: true,
          CommonKitchenTools: false,
          MeasurementsAndConversion: false,
          FoodSafety: false,
          OccupationalHealthAndSafety: false,
          KnifeSkills: false,
          // Unit 2
          TypesOfAppetizers: true,
          KitchenSafety: false,
          PreparingAppetizers: false,
          PlatingAppetizers: false,
          // Unit 3
          Unit31: true,  // First lesson of Unit 3
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        },
        lessonCompletionStatus: {
          // Unit 1
          KitchenDepartment: false,
          CommonKitchenTools: false,
          MeasurementsAndConversion: false,
          FoodSafety: false,
          OccupationalHealthAndSafety: false,
          KnifeSkills: false,
          // Unit 2
          TypesOfAppetizers: false,
          KitchenSafety: false,
          PreparingAppetizers: false,
          PlatingAppetizers: false,
          // Unit 3
          Unit31: false,
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        }
      };
    }

    res.status(200).json({
      lessonLockStatus: lessonStatus.lessonLockStatus,
      lessonCompletionStatus: lessonStatus.lessonCompletionStatus
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/course/unit3/status', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    let lessonStatus = await LessonStatus.findOne({ userID: userId });

    if (!lessonStatus) {
      lessonStatus = {
        lessonLockStatus: {
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        },
        lessonCompletionStatus: {
          Unit31: false,
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        }
      };
    }

    res.status(200).json({
      lessonLockStatus: lessonStatus.lessonLockStatus,
      lessonCompletionStatus: lessonStatus.lessonCompletionStatus
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/course/fundamentalsofcokery/update', verifyToken, async (req, res) => {
  try {
    const { lessonName } = req.body;
    const userId = req.userId;

    let lessonStatus = await LessonStatus.findOne({ userID: userId });

    if (!lessonStatus) {
      lessonStatus = new LessonStatus({
        userID: userId,
        lessonLockStatus: {
          // Unit 1 (defaults)
          KitchenDepartment: true,
          CommonKitchenTools: false,
          MeasurementsAndConversion: false,
          FoodSafety: false,
          OccupationalHealthAndSafety: false,
          KnifeSkills: false,
          // Unit 2 (defaults)
          TypesOfAppetizers: true,
          KitchenSafety: false,
          PreparingAppetizers: false,
          PlatingAppetizers: false,
          // Unit 3 (defaults)
          Unit31: true,
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        },
        lessonCompletionStatus: {
          // Unit 1 (defaults)
          KitchenDepartment: false,
          CommonKitchenTools: false,
          MeasurementsAndConversion: false,
          FoodSafety: false,
          OccupationalHealthAndSafety: false,
          KnifeSkills: false,
          // Unit 2 (defaults)
          TypesOfAppetizers: false,
          KitchenSafety: false,
          PreparingAppetizers: false,
          PlatingAppetizers: false,
          // Unit 3 (defaults)
          Unit31: false,
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        }
      });
    }

    // Mark lesson as completed
    lessonStatus.lessonCompletionStatus[lessonName] = true;

    // Unlock next lesson
    const unitLessons = {
      unit1: [
        'KitchenDepartment',
        'CommonKitchenTools',
        'MeasurementsAndConversion',
        'FoodSafety',
        'OccupationalHealthAndSafety',
        'KnifeSkills'
      ],
      unit2: [
        'TypesOfAppetizers',
        'KitchenSafety',
        'PreparingAppetizers',
        'PlatingAppetizers'
      ],
      unit3: [
        'Unit31',
        'Unit32',
        'Unit33',
        'Unit34',
        'Unit35'
      ]
    };

    let currentUnit, currentIndex;
    for (const [unit, lessons] of Object.entries(unitLessons)) {
      const index = lessons.indexOf(lessonName);
      if (index !== -1) {
        currentUnit = unit;
        currentIndex = index;
        break;
      }
    }

    if (currentUnit && currentIndex !== -1) {
      const lessonsOrder = unitLessons[currentUnit];
      if (currentIndex < lessonsOrder.length - 1) {
        const nextLesson = lessonsOrder[currentIndex + 1];
        lessonStatus.lessonLockStatus[nextLesson] = true;
      }
    }

    await lessonStatus.save();

    res.status(200).json({
      lessonLockStatus: lessonStatus.lessonLockStatus,
      lessonCompletionStatus: lessonStatus.lessonCompletionStatus
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
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
          'PlatingAppetizers': {
              courseName: 'PreparingAppetizers',
              lessonName: 'PlatingAppetizers'
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


router.post('/api/course/unit3/update', verifyToken, async (req, res) => {
  try {
    const { lessonName } = req.body;
    const userId = req.userId;

    let lessonStatus = await LessonStatus.findOne({ userID: userId });

    if (!lessonStatus) {
      lessonStatus = new LessonStatus({
        userID: userId,
        lessonLockStatus: {
          Unit31: true,  // First lesson is always unlocked
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        },
        lessonCompletionStatus: {
          Unit31: false,
          Unit32: false,
          Unit33: false,
          Unit34: false,
          Unit35: false
        }
      });
    }

    // Mark current lesson as completed
    if (lessonName in lessonStatus.lessonCompletionStatus) {
      lessonStatus.lessonCompletionStatus[lessonName] = true;
    }

    // Unlock next lesson if available
    const unitLessons = ['Unit31', 'Unit32', 'Unit33', 'Unit34', 'Unit35'];
    const currentIndex = unitLessons.indexOf(lessonName);
    
    if (currentIndex !== -1 && currentIndex < unitLessons.length - 1) {
      const nextLesson = unitLessons[currentIndex + 1];
      lessonStatus.lessonLockStatus[nextLesson] = true;
    }

    await lessonStatus.save();

    res.status(200).json({
      success: true,
      lessonLockStatus: lessonStatus.lessonLockStatus,
      lessonCompletionStatus: lessonStatus.lessonCompletionStatus
    });
  } catch (error) {
    console.error('Error updating lesson status:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to update lesson status' 
    });
  }
});

  
module.exports = router;