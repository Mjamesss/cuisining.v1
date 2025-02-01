const User = require("../models/user");

const checkProfileCustomized = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId); // req.userId comes from verifyToken middleware
    if (user.isProfileCustomized) {
      return res.status(403).json({ message: "Profile already customized" });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = checkProfileCustomized;