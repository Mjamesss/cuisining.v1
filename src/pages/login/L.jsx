import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'; // Import external CSS

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [focus, setFocus] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));

  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email address.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setError(emailError);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Login response:", data);

      if (response.status === 200) {
        const token = data.token;
        localStorage.setItem("authToken", token);
        console.log("Token stored in localStorage:", token);

        const { fName, email, isProfileCustomized } = data.user;

        if (isProfileCustomized) {
          navigate("/home-page");
        } else {
          navigate(`/customize-profile?token=${token}&fName=${encodeURIComponent(fName)}&email=${encodeURIComponent(email)}`);
        }
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/oauth/google";
  };

  return (
    <div className="background">
      <div className="container">
        {/* Left Section - Welcome Content (Hidden on Mobile) */}
        {!isMobile && (
          <div className="left-section">
            <img
              src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741024965/avatars/1741024964177-Cuisining%20%20Logo.png.png"
              alt="Cuisining Logo"
              className="logo"
            />
            <h2>Welcome to <b>CUISINING</b></h2>
            <p>A 3D web-based cooking simulator designed to simulate the experience of cooking within a virtual Experience</p>
          </div>
        )}

        {/* Right Section - Login Form (Always Visible) */}
        <div className="right-section">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="heading">Hello, Future Chef</h2>

              {/* Email Input */}
              <div className="input-wrapper">
                <label htmlFor="email" className={focus.email ? "label-focused" : "label"}>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`input ${focus.email ? "input-focused" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="input-wrapper">
                <label htmlFor="password" className={focus.password ? "label-focused" : "label"}>Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`input ${focus.password ? "input-focused" : ""}`}
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus("password")}
                  onBlur={(e) => handleBlur("password", e.target.value)}
                />
                <button
                  type="button"
                  className="show-password-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img src={showPassword ? "view.png" : "hide.png"} alt="toggle password visibility"
                    style={{ width: "20px", height: "20px" }}
                  />
                </button>
              </div>

              {/* Error Message */}
              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="login-button" disabled={!formData.email || !formData.password}>
                Log In
              </button>

              {/* Forgot Password */}
              <a href="/ForgotPass" className="forgot-password-link">Forgot Password?</a>

              {/* OR Divider */}
              <div className="hr-container">
                <hr className="hr" />
                <span className="or-text">or</span>
                <hr className="hr" />
              </div>

              <button
                onClick={handleGoogleLogin}
                className="google-login-button"
              >
                <img src="google.png" alt="" className="social-button-img" />
                Continue with Google
              </button>

              <div className="signup">
                <p className="signup-text">
                  Don't Have an Account? <a href="/signup" className="signup-link">Sign Up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;