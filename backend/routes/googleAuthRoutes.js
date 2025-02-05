const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user"); // Import User model
const router = express.Router();

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:5000/api/oauth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Ensure the profile contains an email
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email associated with Google account"), null);

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (!user) {
          // Create a new user with the full name from Google
          const fullName = `${profile.name.givenName} ${profile.name.familyName}`;
          user = new User({
            fName: fullName, // Use full name instead of just givenName
            email,
            username: email,
            provider: "Google",
          });
          await user.save();
        }
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Route to initiate Google authentication
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    try {
      const jwtToken = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });

      if (req.user.isProfileCustomized) {
        return res.redirect(`http://localhost:3000/home-page?token=${jwtToken}`);
      } else {
        return res.redirect(`http://localhost:3000/customize-profile?token=${jwtToken}`);
      }
    } catch (err) {
      console.error("Error during Google OAuth callback:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
module.exports = router;