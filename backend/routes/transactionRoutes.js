// Profile.js (or your router file)
const express = require('express');
const router = express.Router();
const Profile = require('../models/profile'); // Adjust the path to your Profile model

router.get('/pro-users', async (req, res) => {
    try {
        // Extract pagination parameters from the query string
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
        const skip = (page - 1) * limit; // Calculate the number of documents to skip

        // Fetch all profiles where proAccount is true, with pagination
        const proUsers = await Profile.find({ proAccount: true })
            .skip(skip) // Skip the appropriate number of documents
            .limit(limit); // Limit the number of documents returned

        // Count the total number of pro users (for pagination metadata)
        const totalProUsers = await Profile.countDocuments({ proAccount: true });

        if (!proUsers || proUsers.length === 0) {
            return res.status(404).json({ error: 'No pro users found.' });
        }

        // Extract the required fields for each user
        const paymentDetails = proUsers.map(user => ({
            userId: user.userID, // Include the userID for identification
            fullName: user.fullName, // Optional: Include additional fields if needed
            modeOfPayment: user.modeOfPayment,
            amount: user.amount,
            transacId: user.transacId,
            date: user.date
        }));

        // Return the payment details along with pagination metadata
        res.status(200).json({
            totalProUsers,
            currentPage: page,
            totalPages: Math.ceil(totalProUsers / limit),
            users: paymentDetails
        });
    } catch (error) {
        console.error('Error fetching pro users:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;