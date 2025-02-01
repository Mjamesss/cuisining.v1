// verifyToken.js
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Extract the token from the Authorization header
  
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;  // Assuming 'userId' is part of the payload
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
