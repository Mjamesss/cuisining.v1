const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("passport"); // ✅ Ensure this is required
require("dotenv").config();
const bodyParser = require('body-parser');
const session = require("express-session");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profRoutes");
const forgotPassMailing = require("./routes/change-pass");
const otpRoutes = require("./routes/otpRoutes");
const oAuthRoutes = require("./routes/googleAuthRoutes");

// Import Google Strategy (Ensure it's required)
require("./routes/googleAuthRoutes");

const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
);

// Session middleware (needed for persistent login with Passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "yourSecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ✅ Make sure routes come AFTER Passport initialization
app.use("/api/auth", authRoutes);
app.use("/api/password", forgotPassMailing);
app.use("/api/profile", profileRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/oauth", oAuthRoutes);

app.get("/", (req, res) => {
  res.send("Our Server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));