const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// Send Reset Link
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    const resetLink = `http://localhost:3000/SetNewPass?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset',
      html: `
      <html>
        <head>
          <title>Password Reset</title>
          <style>
            body {font-family: 'Poppins', sans-serif;margin: 0;padding: 0;}
            .container {width: 100%;max-width: 600px;margin: 20px auto;padding: 20px;border-radius: 10px;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);text-align: left;}
            .cbtn {display: inline-block;padding: 10px 20px;border: 1px solid transparent;border-radius: 10px;text-align: center;text-decoration: none;cursor: pointer;font-size: 16px;font-weight: 600;color: white;background-color: #363100;transition: all 0.3s ease;margin-left: 16px;display: inline-block;}
            .cbtn:hover {opacity: 0.8;}
            p {color: #363100;font-size: 16px;line-height: 1.5;margin-bottom: 20px;margin-left: 16px;font-weight: 600;}
            h1 {margin: 0 0 1rem;line-height: 1.2;color: #363100;margin-left: 16px;font-weight: 900;}
            img {width: 150px;height: 150px;margin-left: 16px;margin-bottom: 20px;}
          </style>
        </head>
        <body>
          <table role="presentation" width="100%" style="max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px;">
            <tr>
              <td style="text-align: left;">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1738595983/Cuisining_Logo_hkzxgv.png" alt="Cuisining Logo" style="width: 150px; height: 150px; margin-bottom: 20px;">
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <h1 style="font-weight: 900;">Reset Your Password</h1>
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <p style="color: #363100; font-size: 16px; font-weight: 600;">Click the button below to reset your Cuisining account password. If you did not request a password reset, feel free to disregard and delete this email.</p>
              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
                <a href="${resetLink}" class="cbtn" style="color:white">Reset Password</a>
              </td>
            </tr>
          </table>
        </body>
      </html>`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      res.status(200).json({ message: 'Email sent successfully' });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reset Password
router.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    
    await user.save();
    res.status(200).json({ message: "Password has been reset successfully" });

  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

module.exports = router;
