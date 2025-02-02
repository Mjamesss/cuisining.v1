const express = require("express");
const { login, signup, getUserProfile  } = require("../controllers/authController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId; // Attach the user ID to the request object
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ message: "Invalid token" });
  }
}; 
// POST route for login
router.post("/login", login);

// POST route for signup
router.post("/signup", signup);
router.get("/profile", authMiddleware, getUserProfile);
module.exports = router;
