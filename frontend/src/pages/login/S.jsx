import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './sidenotif.css'

const SignUpForm = () => {
  const navigate = useNavigate();

  const [focus, setFocus] = useState({
    email: false,
    fullname: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [userEnteredCode, setUserEnteredCode] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // Function to show notification
  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide after 3 seconds
  };

  // Email validation
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  // Full Name validation
  const validateFullname = (fullname) => {
    if (!fullname) {
      return "Full Name is required.";
    }
    if (fullname.length < 4) {
      return "Full Name must be at least 4 characters long.";
    }
    return "";
  };

  // Password validation
  const validatePassword = (password) => {
    const passwordLength = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!passwordLength) {
      return "Password must be at least 6 characters long.";
    } else if (!hasUpperCase || !hasLowerCase) {
      return "Password must contain both uppercase and lowercase letters.";
    } else if (!hasNumbers) {
      return "Password must contain at least one number.";
    } else if (!hasSpecialChars) {
      return "Password must contain at least one special character.";
    }

    return "";
  };

  // Handle input focus and blur
  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
    if (field === "email") setEmailError(validateEmail(value));
    if (field === "fullname") setFullnameError(validateFullname(value));
    if (field === "password") setPasswordError(validatePassword(value));
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send OTP to the user's email
  const sendVerificationCode = async () => {
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setEmailError(emailError);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/otp/send-otp`,
        { email: formData.email }
      );
      

      if (response.status === 200) {
        setCodeSent(true);
        showNotificationMessage("OTP sent successfully. Check your email.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred while sending OTP.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const emailError = validateEmail(formData.email);
    const fullnameError = validateFullname(formData.fullname);
    const passwordError = validatePassword(formData.password);

    if (emailError || fullnameError || passwordError) {
      setEmailError(emailError);
      setFullnameError(fullnameError);
      setPasswordError(passwordError);
      return; // Prevent submission if any validation fails
    }

    // Check if the OTP has been sent and entered
    if (!codeSent || !userEnteredCode) {
      setErrorMessage("All fields are required, including OTP.");
      return; // Prevent submission if OTP isn't sent or entered
    }

    setIsSubmitting(true);
    setErrorMessage(""); // Clear previous errors

    try {
      // Verify OTP
      const verifyResponse = await axios.post(
        `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/otp/verify-otp`,
        {
          email: formData.email,
          otpCode: userEnteredCode,
        }
      );
      

      if (verifyResponse.status === 200) {
        // OTP verified, proceed with signup
        const signupResponse = await axios.post(
          `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/auth/signup`,
          {
            fName: formData.fullname,
            email: formData.email,
            password: formData.password,
            otpCode: userEnteredCode,
          }
        );
        

        if (signupResponse.status === 201) {
          console.log("Signup successful", signupResponse.data);
          navigate("/DoneRegister"); // Redirect to the done page
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred during signup.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/oauth/google`;
  };
  

  const styles = {
    background: {
      backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/dm6wodni6/image/upload/v1738813637/login-bg_n5skpt.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100%",
      width: "100%",
    },
    formWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      minHeight: "100vh",
    },
    formContainer: {
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(0px)",
      borderRadius: "10px",
      padding: "25px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    inputWrapper: {
      position: "relative",
      marginBottom: "20px",
    },
    label: (focused) => ({
      position: "absolute",
      left: "10px",
      top: focused ? "-10px" : "50%",
      fontSize: focused ? "12px" : "16px",
      color: "#363100",
      transition: "all 0.3s ease",
      transform: focused ? "translateY(0)" : "translateY(-50%)",
      padding: "0 5px",
    }),
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "10px",
      outline: "none",
      backgroundColor: "#f8f8f8",
      transition: "all 0.3s ease",
    },
    inputFocused: {
      border: "1px solid #C1B857",
      boxShadow: "0 0 8px rgba(193, 184, 87, 0.5)",
      backgroundColor: "#fff",
    },
    button: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      cursor: "pointer",
      fontWeight: "700",
    },
    sendCodeButton: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      cursor: "pointer",
      fontWeight: "700",
      marginLeft: "10px",
    },
    showPasswordButton: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
    },
    codeContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    codeInput: {
      flex: 1,
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "10px",
      outline: "none",
      backgroundColor: "#f8f8f8",
      transition: "all 0.3s ease",
    },
    hrContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px 0",
    },
    hr: {
      flex: 1,
      height: "1px",
      backgroundColor: "#000000",
      border: "none",
    },
    orText: {
      margin: "0 10px",
      fontSize: "16px",
      color: "#363100",
      fontWeight: "300",
    },
    socialButtonsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    socialButtonImg: {
      width: "150%",
      maxWidth: "25px",
      height: "auto",
      borderRadius: "10px",
      cursor: "pointer",
      marginRight: "10px",
    },
    signup: {
      justifyContent: "center",
      display: "flex",
      marginTop: "20px",
    },
    signupText: {
      fontSize: "14px",
      fontWeight: "200",
      color: "#363100",
    },
    signupLink: {
      textDecoration: "none",
      fontWeight: "700",
      color: "#363100",
    },
    heading: {
      textAlign: "center",
      fontSize: "35px",
      color: "#363100",
      fontWeight: "800",
      lineHeight: "1.2",
    },
    headingLogo: {
      height: "40px",
      width: "40px",
      marginBottom: "10px",
    },
    passwordError: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
    usernameError: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
    emailError: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <h2 style={styles.heading}>CUISINING</h2>

            {/* Email Input */}
            <div style={styles.inputWrapper}>
              <label htmlFor="email" style={styles.label(focus.email)}>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                style={{
                  ...styles.input,
                  ...(focus.email && styles.inputFocused),
                }}
                onFocus={() => handleFocus("email")}
                onBlur={(e) => handleBlur("email", e.target.value)}
                onChange={handleChange}
              />
              {emailError && <div style={styles.emailError}>{emailError}</div>}
            </div>

            {/* Full Name Input */}
            <div style={styles.inputWrapper}>
              <label htmlFor="fullname" style={styles.label(focus.fullname)}>Full Name</label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                value={formData.fullname}
                style={{
                  ...styles.input,
                  ...(focus.fullname && styles.inputFocused),
                }}
                onFocus={() => handleFocus("fullname")}
                onBlur={(e) => handleBlur("fullname", e.target.value)}
                onChange={handleChange}
              />
              {fullnameError && <div style={styles.usernameError}>{fullnameError}</div>}
            </div>

            {/* Password Input */}
            <div style={styles.inputWrapper}>
              <label htmlFor="password" style={styles.label(focus.password)}>Password</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                style={{
                  ...styles.input,
                  ...(focus.password && styles.inputFocused),
                }}
                onFocus={() => handleFocus("password")}
                onBlur={(e) => handleBlur("password", e.target.value)}
                onChange={handleChange}
              />
              <button
                type="button"
                style={styles.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? "view.png" : "hide.png"}
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            </div>
            {passwordError && <div style={styles.passwordError}>{passwordError}</div>}

            {/* Verification Code Input and Send Code Button */}
            <div style={styles.codeContainer}>
              <input
                type="text"
                placeholder="Verification Code"
                value={userEnteredCode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 6); // Remove non-numeric characters and limit to 6 digits
                  setUserEnteredCode(value);
                }}
                maxLength={6}
                style={styles.codeInput}
                disabled={!codeSent}
              />
              <button
                type="button"
                style={styles.sendCodeButton}
                onClick={sendVerificationCode}
                disabled={codeSent}
              >
                {codeSent ? "Code Sent" : "Send Code"}
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && <div style={{ color: "red", textAlign: "center" }}>{errorMessage}</div>}

            {/* Submit Button */}
            <button type="submit" style={styles.button} disabled={isSubmitting}>
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Divider */}
            <div style={styles.hrContainer}>
              <hr style={styles.hr} />
              <span style={styles.orText}>or</span>
              <hr style={styles.hr} />
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                border: "1px solid #2DE000",
                borderRadius: "10px",
                textAlign: "center",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                color: "#363100",
                width: "100%",
              }}
            >
              <img src="google.png" alt="" style={styles.socialButtonImg} />
              Continue with Google
            </button>

            {/* Login Link */}
            <div style={styles.signup}>
              <p style={styles.signupText}>
                Already Have an Account?{" "}
                <a href="/" style={styles.signupLink}>Log In</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Notification Component */}
      <Notification message={notificationMessage} show={showNotification} />
    </div>
  );
};

// Notification Component
const Notification = ({ message, show }) => {
  return (
    <div className={`notif-container ${show ? "show" : ""}`}>
      {message}
    </div>
  );
};

export default SignUpForm;