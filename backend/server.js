const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes"); // Ensure this path is correct
require("dotenv").config(); // Loads the variables from .env file
const connectDB = require("./config/db"); // Import your connectDB function
const profileRoutes = require("./routes/profRoutes"); // Import your profileRoutes function
const forgotPassMailing = require("./routes/change-pass"); // Import your profileRoutes function

const cors = require('cors');



const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser()); // Required for reading cookies
app.use(cors());

// Mount the routes
app.use("/api/auth", authRoutes);
app.use("/api/password", forgotPassMailing);
app.use("/api/profile", profileRoutes);  // Add this to mount the profile routes
app.get('/', (req, res) => {
    res.send('Our Server');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
