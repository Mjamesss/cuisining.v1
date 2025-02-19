const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user"); // Import User model
const Profile = require("../models/profile"); // Import Profile model
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

        // Extract the profile picture URL
        const avatarUrl = profile.photos?.[0]?.value;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (!user) {
          // Create a new user with the full name and profile picture from Google
          const fullName = `${profile.name.givenName} ${profile.name.familyName}`;
          user = new User({
            fName: fullName, // Use full name instead of just givenName
            email,
            username: email,
            provider: "Google",
          });
          await user.save();
        }

        // Check if the profile exists for the user
        let profileDoc = await Profile.findOne({ userID: user._id });
        if (!profileDoc) {
          // Create a new profile with the Google profile picture
          profileDoc = new Profile({
            userID: user._id,
            fullName: `${profile.name.givenName} ${profile.name.familyName}`,
            avatarUrl, // Save the Google profile picture URL
            selectedGroup1: "defaultGroup1", // Set default values or make these fields optional
            selectedGroup2: "defaultGroup2",
            hasTakenNCII: false,
          });
        } else {
          // Update the profile picture URL if it has changed
          profileDoc.avatarUrl = avatarUrl;
        }
        await profileDoc.save();

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

// Route to initiate Google authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
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