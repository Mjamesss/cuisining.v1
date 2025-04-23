import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <style>
        {`
          .background {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), 
                              url('https://res.cloudinary.com/dm6wodni6/image/upload/v1738813637/login-bg_n5skpt.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .container {
            display: flex;
            width: 80%;
            max-width: 1000px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
          }

          .left-section {
            flex: 1;
            background-color: #C1B857;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
          }

          .right-section {
            flex: 1;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            padding: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .form-container {
            width: 100%;
            max-width: 400px;
            text-align: center;
          }

          .input-wrapper {
            position: relative;
            margin-bottom: 20px;
          }

          .label {
            position: absolute;
            left: 10px;
            top: 50%;
            font-size: 16px;
            color: #363100;
            transition: all 0.3s ease;
            transform: translateY(-50%);
            padding: 0 5px;
          }

          .label-focused {
            top: -10px;
            font-size: 12px;
            transform: translateY(0);
          }

          .input {
            width: 100%;
            padding: 10px;
            border: 1px solid transparent;
            border-radius: 10px;
            outline: none;
            background-color: #f8f8f8;
            transition: all 0.3s ease;
          }

          .input-focused {
            border: 1px solid #C1B857;
            box-shadow: 0 0 8px rgba(193, 184, 87, 0.5);
            background-color: #fff;
          }

          .login-button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #C1B857;
            color: #363100;
            cursor: pointer;
            font-weight: 700;
          }

          .forgot-password-link {
            display: block;
            text-align: center;
            font-size: 14px;
            color: #363100;
            text-decoration: none;
            margin-top: 10px;
            font-weight: 500;
          }

          .hr-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
          }

          .hr {
            flex: 1;
            height: 1px;
            background-color: #000000;
            border: none;
          }

          .or-text {
            margin: 0 10px;
            font-size: 16px;
            color: #363100;
            font-weight: 300;
          }

          .google-login-button {
            display: inline-block;
            padding: 10px 20px;
            border: 1px solid #2DE000;
            border-radius: 10px;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            background-color: transparent;
            color: #363100;
            width: 100%;
          }

          .social-button-img {
            width: 150%;
            max-width: 25px;
            height: auto;
            border-radius: 10px;
            cursor: pointer;
            margin-right: 10px;
          }

          .signup {
            justify-content: center;
            display: flex;
            margin-top: 20px;
          }

          .signup-text {
            font-size: 14px;
            font-weight: 200;
            color: #363100;
          }

          .signup-link {
            text-decoration: none;
            font-weight: 700;
            color: #363100;
          }

          .heading {
            text-align: center;
            font-size: 35px;
            color: #363100;
            font-weight: 800;
            line-height: 1.2;
          }

          .logo {
            width: 300px;
            height: auto;
            margin-bottom: 20px;
          }

          .show-password-button {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            cursor: pointer;
          }

          .error-message {
            color: red;
            text-align: center;
          }

          @media (max-width: 768px) {
            .container {
              width: 90%;
            }

            .left-section {
              display: none; /* Hide left section on mobile */
            }

            .right-section {
              width: 90%;
              padding: 20px;
            }

            .heading {
              font-size: 28px;
            }
          }
        `}
      </style>

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
    </div>
  );
};

export default LoginForm;