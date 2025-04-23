const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user"); // Import User model
const router = express.Router();

// Google OAuth Strategy
const generateToken = (userId) => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT secret key is missing");
  }
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:5000/api/oauth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email from Google"), null);

        let user = await User.findOne({ email });
        const profilePicture = profile.photos?.[0]?.value;
        const fullName = `${profile.name.givenName} ${profile.name.familyName}`;

        if (!user) {
          user = new User({
            fName: fullName,
            email,
            username: email,
            provider: "Google",
            profilePicture: profilePicture || "default_url",
          });
          await user.save();
        } else if (profilePicture && user.profilePicture !== profilePicture) {
          user.profilePicture = profilePicture;
          await user.save();
        }

        // ✅ Generate JWT token
        const token = generateToken(user._id);
        user._jwtToken = token;

        done(null, user);
      } catch (err) {
        console.error("Google strategy error:", err);
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
      console.log("Generated JWT Token:", jwtToken);

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