const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();  // This loads the JWT_SECRET_KEY from your .env file


const login = async (req, res) => {
  const { username, password } = req.body;

  console.log("Login attempt with username:", username);  // Log the username being attempted

  try {
    // Step 1: Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found");  // Log if user is not found
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Step 2: Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");  // Log if password doesn't match
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Step 3: Create the JWT token using the secret key from the .env file
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    console.log("Token generated:", token);  // Log the generated token

    // Step 4: Respond with the token and success message
    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (err) {
    console.error("Server error:", err);  // Log the actual error
    res.status(500).json({ message: "Server error" });
  }
};

const signup = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(422).json({ message: "Username is already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error creating user" });
  }
};

module.exports = { login, signup };
