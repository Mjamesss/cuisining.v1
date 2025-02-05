const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const OTP = require("../models/otpModel"); // Import your OTP model
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
      user: {
        fName: user.fName || "", // Include fName
        email: user.email || "", // Include email
        isProfileCustomized: user.isProfileCustomized, // Include profile customization status
      },
    });

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const signup = async (req, res) => {
  const { fName, email, password, otpCode } = req.body;

  console.log("Signup request received:", { fName, email, password, otpCode });

  // Validate required fields
  if (!fName || !email || !password || !otpCode) {
    console.log("Missing required fields");
    return res.status(400).json({ message: "All fields are required, including OTP." });
  }

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already registered:", email);
      return res.status(422).json({ message: "Email is already registered." });
    }

    // Find the OTP record for the email
    const otpRecord = await OTP.findOne({ email });
    if (!otpRecord) {
      console.log("OTP not found for email:", email);
      return res.status(400).json({ message: "OTP not found. Please request a new OTP." });
    }

    // Check if the OTP has expired
    if (new Date() > otpRecord.expiresAt) {
      console.log("OTP expired for email:", email);
      return res.status(400).json({ message: "OTP has expired. Please request a new OTP." });
    }

    // Check if the OTP is correct
    if (otpRecord.otpCode !== otpCode) {
      console.log("Invalid OTP for email:", email);
      return res.status(400).json({ message: "Invalid OTP." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed successfully");

    // Create a new user with provider set to "Cuisining"
    const newUser = new User({
      fName,
      email,
      password: hashedPassword,
      username: email, // Use email as username (temporary workaround)
      provider: "Cuisining", // Set provider to Cuisining
    });

    // Save the user to the database
    await newUser.save();
    console.log("User saved successfully:", newUser);

    // Delete the OTP record after successful signup
    await OTP.deleteOne({ email });
    console.log("OTP record deleted for email:", email);

    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
};
const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from the token
    console.log("Fetching profile for user ID:", userId); // Log the user ID
    const user = await User.findById(userId);
    if (!user) {
      console.error("User not found for ID:", userId);
      return res.status(404).json({ message: "User not found" });
    }
    console.log("Fetched user profile:", user); // Log the user data
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
