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
const settingsRoutes = require("./routes/settingRoutes");
const notifRoutes = require("./routes/notifRoutes");
const userRoutes = require("./routes/usersRoutes");
const paypalRoutes = require('./routes/paypalRoutes');
const transactionRoutes = require("./routes/transactionRoutes");
const FinalAssessment = require("./routes/final-assessmentRoutes");
const reportRoute = require('./routes/hasRoutes');

// Import Google Strategy (Ensure it's required)
require("./routes/googleAuthRoutes");
// ✅ Make sure routes come AFTER Passport initialization



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
app.use("/api/auth", authRoutes);
app.use("/api/password", forgotPassMailing);
app.use("/api/profile", profileRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/oauth", oAuthRoutes);
app.use("/api/settings", settingsRoutes); 
app.use("/api/notif/", notifRoutes);
app.use ("/api/user/", userRoutes);
app.use('/api/paypal', paypalRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/game", FinalAssessment);
app.use('/api/', reportRoute);



app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
  res.send("Our Server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

