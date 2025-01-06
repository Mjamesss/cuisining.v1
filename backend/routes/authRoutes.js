const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const { login, signup } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/protected-route", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected data", user: req.user });
});

module.exports = router;
