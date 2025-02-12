const express = require("express");
const { login, signup, getUserProfile  } = require("../controllers/authController");
const verifyToken = require("../middlewares/verifyToken");
const tokenBlacklist = require("../utils/blacklist");
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
router.post("/logout", verifyToken, (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("Token received for logout:", token); // Log the token for debugging

  if (token) {
    tokenBlacklist.add(token);
    console.log("Token successfully added to the blacklist:", token);

    // Invalidate the cookie
    res.clearCookie("authToken", {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production", 
      sameSite: "Strict", 
      maxAge: 0, // Set maxAge to 0 to expire the cookie immediately
    });

    return res.status(200).json({ message: "Logged out successfully." });
  } else {
    console.error("No token provided for logout.");
    return res.status(400).json({ message: "No token provided." });
  }
});


// POST route for login
router.post("/login", login);

// POST route for signup
router.post("/signup", signup);
router.get("/profile", authMiddleware, getUserProfile);
module.exports = router;
