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
      html: `
      <html>
        <head>
          <title>Your OTP Code for Account Verification</title>
          <style>
            body {font-family: 'Poppins', sans-serif; margin: 0; padding: 0; color: #363100;}
            .container {width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: left;}
            .cbtn {display: inline-block; padding: 10px 20px; border: 1px solid transparent; border-radius: 10px; text-align: center; text-decoration: none; cursor: pointer; font-size: 16px; font-weight: 600; color: white; background-color: #363100; transition: all 0.3s ease; margin-left: 16px; display: inline-block;}
            .cbtn:hover {opacity: 0.8;}
            p {color: #363100; font-size: 16px; line-height: 1.5; margin-bottom: 20px; margin-left: 16px; font-weight: 600;}
            h1 {margin: 0 0 1rem; line-height: 1.2; color: #363100; margin-left: 16px; font-weight: 900;}
            img {width: 150px; height: 150px; margin-left: 16px; margin-bottom: 20px;}
          </style>
        </head>
        <body>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px;">
            <tr>
              <td style="text-align: left;">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1738595983/Cuisining_Logo_hkzxgv.png" alt="Cuisining Logo" style="width: 150px; height: 150px; margin-bottom: 20px;">
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <h1 style="font-weight: 900; color: #363100; margin: 0 0 1rem; line-height: 1.2;">Your OTP Code for Account Verification</h1>
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <p style="color: #363100; font-size: 16px; font-weight: 600; line-height: 1.5; margin-bottom: 20px;">Your One-Time Password is here to secure your Cuisining account!
To complete your registration and unlock a world of delicious recipes, personalized meal plans, and seamless cooking experiences, please enter the OTP sent to your email or phone. This code ensures your account is protected and helps us verify it's really you</p>
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <h3 style="font-size: 30px; font-weight: 900; color: #363100; margin: 0;">${otpCode}</h3>
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;">
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <p style="color: #363100; font-size: 18px; font-weight: 600; margin: 0;">Didn’t receive the OTP? Check your spam folder or request a new one.</p>
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <h3 style="color: #363100; font-size: 20px; font-weight: 700; margin: 0;">Thank you for joining Cuisining – where cooking meets creativity!</h3>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
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