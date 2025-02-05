const express = require("express");
const nodemailer = require("nodemailer");
const OTP = require("../models/otpModel");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Adjust the path based on where your User model is located

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Set this in your .env file
    pass: process.env.EMAIL_PASS, // Set this in your .env file
  },
});

router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  // Check if the email is already registered
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "This email is already registered." });
  }

  // Check if there's already an OTP sent to this email
  const existingOtp = await OTP.findOne({ email });

  if (existingOtp && existingOtp.attempts >= 1 && new Date() < existingOtp.expiresAt) {
    return res.status(400).json({ message: "An OTP has already been sent. Please try again later." });
  }

  // Generate a 6-digit OTP
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

  // Set expiration time (2 minutes from now)
  const expiresAt = new Date(new Date().getTime() + 2 * 60000); // 2 minutes expiration

  try {
    // Save OTP in the database
    await OTP.findOneAndUpdate(
      { email },
      { otpCode, expiresAt, attempts: 0 },
      { upsert: true, new: true }
    );

    // Send the OTP via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otpCode}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while sending OTP." });
  }
});
router.post("/verify-otp", async (req, res) => {
  const { email, otpCode } = req.body;
  console.log(`Received email: ${email}, OTP Code: ${otpCode}`);  // Log incoming data

  // Find OTP record
  const otpRecord = await OTP.findOne({ email });
  if (!otpRecord) {
    console.log("OTP record not found.");
    return res.status(400).json({ message: "OTP not found." });
  }

  if (otpRecord.attempts >= 1) {
    console.log("Already attempted OTP verification.");
    return res.status(400).json({ message: "You have already attempted to verify OTP." });
  }

  if (new Date() > otpRecord.expiresAt) {
    console.log("OTP has expired.");
    return res.status(400).json({ message: "OTP has expired." });
  }

  // Check if OTP is correct
  if (otpRecord.otpCode === otpCode) {
    console.log("OTP verified successfully.");
    await OTP.updateOne({ email }, { attempts: 1 });

    const token = jwt.sign({ email }, "your_jwt_secret", { expiresIn: "1h" });
    res.status(200).json({ message: "OTP verified successfully", token });
  } else {
    console.log("Invalid OTP.");
    res.status(400).json({ message: "Invalid OTP." });
  }
});


module.exports = router;
