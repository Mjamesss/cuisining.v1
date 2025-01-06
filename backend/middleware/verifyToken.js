const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Add user data to the request
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
