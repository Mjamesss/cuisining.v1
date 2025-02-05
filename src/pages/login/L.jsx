import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [focus, setFocus] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle input focus
  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));

  // Handle input blur
  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email address.";
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setError(emailError);
      return;
    }
    try {
      // Step 1: Log in the user
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Login response:", data); // Log the login response
  
      if (response.status === 200) {
        const token = data.token; // Get token from JSON response
        localStorage.setItem("authToken", token); // Store token in localStorage
        console.log("Token stored in localStorage:", token); // Log the token
  
        // Step 2: Fetch profile customization status
        const profileResponse = await fetch("http://localhost:5000/api/profile/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Use token from JSON response
        });
  
        if (!profileResponse.ok) {
          const errorData = await profileResponse.json();
          console.error("Error fetching profile:", errorData);
          throw new Error("Failed to fetch profile");
        }
  
        const profileData = await profileResponse.json();
        console.log("Profile response:", profileData); // Log the profile response
  
        // Step 3: Redirect based on profile customization status
        if (profileData.isProfileCustomized) {
          navigate("/home-page");
        } else {
          navigate("/customize-profile");
        }
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    }
  };
  const styles = {
    background: {
      backgroundImage: "url('lbg.png')",
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
    showPasswordButton: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
    },
    forgotPasswordLink: {
      display: "block",
      textAlign: "center",
      fontSize: "14px",
      color: "#363100",
      textDecoration: "none",
      marginTop: "10px",
      fontWeight: "500",
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
                style={{ ...styles.input, ...(focus.email && styles.inputFocused) }}
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={(e) => handleBlur("email", e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div style={styles.inputWrapper}>
              <label htmlFor="password" style={styles.label(focus.password)}>Password</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                style={{ ...styles.input, ...(focus.password && styles.inputFocused) }}
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus("password")}
                onBlur={(e) => handleBlur("password", e.target.value)}
              />
              {/* Show/Hide Password Button */}
              <button
                type="button"
                style={styles.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? "view.png" : "hide.png"} alt="n"
                style={{  width: "20px", height: "20px" }}
                 />
              </button>
            </div>

            {/* Error Message */}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <button type="submit" style={styles.button} disabled={!formData.email || !formData.password}>
              Log In
            </button>

            {/* Forgot Password */}
            <a href="/ForgotPass" style={styles.forgotPasswordLink}>Forgot Password?</a>

            {/* OR Divider */}
            <div style={styles.hrContainer}>
              <hr style={styles.hr} />
              <span style={styles.orText}>or</span>
              <hr style={styles.hr} />
            </div>

            {/* Social Login Buttons */}
            <div style={styles.socialButtonsContainer}>
              <img src="facebook.png" alt="Facebook Login" style={styles.socialButtonImg} />
                <a href="http://localhost:5000/api/oauth/google"><img src="google.png" alt="Google Login" style={styles.socialButtonImg} /></a>
            </div>

            <div style={styles.signup}>
              <p style={styles.signupText}>
                Don't Have an Account? <a href="/signup" style={styles.signupLink}>Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;