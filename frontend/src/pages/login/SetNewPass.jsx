import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const SetNewPassword = () => {
  const [focus, setFocus] = useState({
    password: false,
    confirmPassword: false,
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setError("Invalid or expired reset link.");
    }
  }, [location]);

  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const validateForm = () => {
    setError("");
    if (!password || !confirmPassword) {
      setError("Both password fields are required.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `${process.env.BACKEND_LINK || "http://localhost:5000"}/api/password/reset-password`,
        {
          token,
          newPassword: password,
        }
      );
      

      setSuccess(response.data.message);
      setTimeout(() => {
        navigate("/"); // Redirect to login page after success
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to reset password.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
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
      borderRadius: "10px",
      padding: "25px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    heading: {
      textAlign: "center",
      fontSize: "35px",
      color: "#363100",
      fontWeight: "800",
      lineHeight: "1.2",
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
      margin: "20px 0",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      cursor: "pointer",
      fontWeight: "700",
    },
    infoText: {
      textAlign: "center",
      fontSize: "16px",
      color: "#363100",
    },
    errorText: {
      color: "red",
      fontSize: "14px",
      textAlign: "center",
      marginTop: "10px",
    },
    successText: {
      color: "green",
      fontSize: "14px",
      textAlign: "center",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div
          style={styles.formContainer}
          onKeyDown={handleKeyPress}
          tabIndex="0"
        >
          <h2 style={styles.heading}>Set a New Password</h2>
          <p style={styles.infoText}>
            Create a new password. Ensure it differs from previous ones for security.
          </p>

          <div style={styles.inputWrapper}>
            <label style={styles.label(focus.password)}>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                ...styles.input,
                ...(focus.password && styles.inputFocused),
              }}
              onFocus={() => handleFocus("password")}
              onBlur={(e) => handleBlur("password", e.target.value)}
            />
          </div>

          <div style={styles.inputWrapper}>
            <label style={styles.label(focus.confirmPassword)}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{
                ...styles.input,
                ...(focus.confirmPassword && styles.inputFocused),
              }}
              onFocus={() => handleFocus("confirmPassword")}
              onBlur={(e) => handleBlur("confirmPassword", e.target.value)}
            />
          </div>

          {error && <p style={styles.errorText}>{error}</p>}
          {success && <p style={styles.successText}>{success}</p>}

          <button style={styles.button} onClick={handleSubmit}>
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
