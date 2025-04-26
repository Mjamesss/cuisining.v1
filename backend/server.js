const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();
const bodyParser = require('body-parser');
const session = require("express-session");
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken'); // Make sure this is required

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profRoutes");
const forgotPassMailing = require("./routes/change-pass");
const otpRoutes = require("./routes/otpRoutes");
const oAuthRoutes = require("./routes/googleAuthRoutes");
const settingsRoutes = require("./routes/settingRoutes");
const notifRoutes = require("./routes/notifRoutes");
const userRoutes = require("./utils/usersRoutes");
const paypalRoutes = require('./routes/paypalRoutes');
const transactionRoutes = require("./routes/transactionRoutes");
const FinalAssessment = require("./routes/final-assessmentRoutes");
const reportRoute = require('./routes/hasRoutes');
const certificateRoute = require('./routes/certRoutes');
const course = require('./routes/courseRoutes');

// Import Google Strategy
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

const allowedOrigins = [
  "http://localhost:3000",
  "https://cuisining-v1.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.log('Blocked by CORS:', origin);
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "yourSecretKey",
    resave: false,
    saveUninitialized: false,
  })
);


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/password", forgotPassMailing);
app.use("/api/profile", profileRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/oauth", oAuthRoutes);
app.use("/api/settings", settingsRoutes); 
app.use("/api/notif/", notifRoutes);
app.use("/api/user/", userRoutes);
app.use('/api/paypal', paypalRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/game", FinalAssessment);
app.use('/api/', reportRoute);
app.use('/api', certificateRoute); 
app.use('/api', course);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("The Cuisining server is already hosted globally.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));