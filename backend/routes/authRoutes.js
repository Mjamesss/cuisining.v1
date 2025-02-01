const express = require("express");
const { login, signup } = require("../controllers/authController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

// POST route for login
router.post("/login", login);  // Make sure the route is correct

// POST route for signup
router.post("/signup", signup);
// Example route in your backend


module.exports = router;
