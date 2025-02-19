const jwt = require("jsonwebtoken");
const tokenBlacklist = require("../utils/blacklist");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("Token in verifyToken:", token); // Log the token for debugging

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  if (tokenBlacklist.has(token)) {
    return res.status(401).json({ message: "Token invalidated. Please log in again." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded Token:", decoded); // Log the decoded token for debugging
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error("Token verification failed:", err); // Log the error for debugging
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;