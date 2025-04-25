const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const verifyToken = require('../middlewares/verifyToken');
const CourseLockStatus = require('../models/course');

const generateUniqueTransacId = async () => {
  let transacId;
  do {
    transacId = Math.floor(100000000000 + Math.random() * 900000000000).toString();
  } while (await Profile.exists({ transacId }));
  return transacId;
};

router.post('/update-pro-account', verifyToken, async (req, res) => {
  try {
    const { amount, modeOfPayment, paymentDate } = req.body;

    // Validate input
    if (!amount || isNaN(amount)) throw new Error('Invalid amount');
    if (!modeOfPayment) throw new Error('Payment method required');
    if (!paymentDate || isNaN(new Date(paymentDate))) throw new Error('Invalid date');

    // Convert amount to number and round to 2 decimal places
    const amountValue = parseFloat(amount);
    const roundedAmount = Math.round(amountValue * 100) / 100;

    const transacId = await generateUniqueTransacId(); // Assuming this function exists
    const updateData = {
      proAccount: true,
      transacId,
      amount: roundedAmount,
      modeOfPayment,
      paymentDate: new Date(paymentDate),
      lastUpdated: new Date()
    };

    // Update the user's profile
    const updatedProfile = await Profile.findOneAndUpdate(
      { userID: req.userId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProfile) throw new Error('Profile not found');

    // Unlock the four courses in the CourseLockStatus document
    await CourseLockStatus.findOneAndUpdate(
      { userID: req.userId },
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

    res.json({
      success: true,
      profile: updatedProfile.toObject({ getters: true, virtuals: false })
    });

  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;