import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [focus, setFocus] = useState({
    email: false,
    fullname: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

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

  // Handle form submission
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
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        email: formData.email,
        fullname: formData.fullname,
        password: formData.password,
      });

      console.log("Signup successful", response.data);
      navigate("/DoneRegister");
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred during signup.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const styles = {
    background: {
      backgroundImage: "url('lbg.png')", // Replace with your image URL
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
    showPasswordButton: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
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
      width: "100%",
      maxWidth: "45px",
      height: "auto",
      borderRadius: "10px",
      cursor: "pointer",
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
      fontSize: "35px", // Reduced size for mobile
      color: "#363100",
      fontWeight: "800",
      lineHeight: "1.2",
    },
    headingLogo: {
      height: "40px", // Reduced size for mobile
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
              <label style={styles.label(focus.email)}>Email</label>
              <input
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
              <label style={styles.label(focus.fullname)}>Full Name</label>
              <input
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
              <label style={styles.label(focus.password)}>Password</label>
              <input
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

            {/* Confirm Password Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.confirmPassword)}>Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                style={{
                  ...styles.input,
                  ...(focus.confirmPassword && styles.inputFocused),
                }}
                onFocus={() => handleFocus("confirmPassword")}
                onBlur={(e) => handleBlur("confirmPassword", e.target.value)}
                onChange={handleChange}
              />
              <button
                type="button"
                style={styles.showPasswordButton}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <img
                  src={showConfirmPassword ? "view.png" : "hide.png"}
                  alt={showConfirmPassword ? "Hide Password" : "Show Password"}
                  style={{ width: "20px", height: "20px" }}
                />
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

            {/* Social Media Buttons */}
            <div style={styles.socialButtonsContainer}>
              <a href="#" className="social-button" style={styles.socialButtonImg}>
                <img src="facebook.png" alt="Facebook Login" style={styles.socialButtonImg} />
              </a>
              <a href="#" className="social-button" style={styles.socialButtonImg}>
                <img src="google.png" alt="Google Login" style={styles.socialButtonImg} />
              </a>
            </div>

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
    </div>
  );
};

export default SignUpForm;