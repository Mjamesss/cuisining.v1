const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

// Helper function to generate JWT
const generateToken = (userId) => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT secret key is missing");
  }
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt with email:", email);

  try {
    // Step 1: Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Step 2: Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Step 3: Generate JWT Token
    const token = generateToken(user._id);
    console.log("Token generated:", token);

    // Step 4: Send token securely in HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true, // Prevents XSS attacks
      secure: process.env.NODE_ENV === "production", // Enable secure flag in production
      sameSite: "Strict", // Prevents CSRF
      maxAge: 3600000, // 1 hour
    });

    // Step 5: Send token in JSON response (for frontend use)
    res.status(200).json({
      message: "Login successful",
      token, // Send token in JSON response
      isProfileCustomized: user.isProfileCustomized, // Send profile status
    });

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const signup = async (req, res) => {
  const { fName, email, password } = req.body;

  if (!fName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fName,
      email,
      password: hashedPassword,
      username: email, // Use email as username (temporary workaround)
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
};
const getUserProfile = async (req, res) => {
  try {
    // Extract the user ID from the token
    const userId = req.userId; // This is set by the auth middleware

    // Fetch the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user's profile data
    res.status(200).json({
      fName: user.fName,
      email: user.email,
      isProfileCustomized: user.isProfileCustomized,
    });
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { login, signup, getUserProfile };
