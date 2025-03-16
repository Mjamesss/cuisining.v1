import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import axios from 'axios';


const ForgotPasswordForm = () => {
  const [focus, setFocus] = useState({ email: false });
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const styles = {
    background: {
      backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/dm6wodni6/image/upload/v1738813637/login-bg_n5skpt.png')", // Replace with your image URL
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
    backButton: {
      position: "absolute",
      top: "20px",
      right: "20px",
      cursor: "pointer",
      border: "none",
      background: "none",
    },
    heading: {
      textAlign: "center",
      fontSize: "35px", // Reduced size for mobile
      color: "#363100",
      fontWeight: "800",
      lineHeight: "1.2",
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
    inputWrapper: {
      position: "relative",
      marginBottom: "20px",
    },
  };

  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/password/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending email');
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Forgot Password</h2>
          <p style={{ textAlign: "center", color: "#363100", fontSize: "16px" }}>
            Please enter your email to reset your password.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.email, email)}>Your Email</label>
              <input
                type="email"
                style={{
                  ...styles.input,
                  ...(focus.email && styles.inputFocused),
                }}
                onFocus={() => handleFocus("email")}
                onBlur={(e) => handleBlur("email", e.target.value)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Reset Password Button */}
            <button type="submit" style={styles.button}>
              Reset Password
            </button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <p style={{ textAlign: "center", color: message.includes('Error') ? "red" : "green" }}>
              {message}
            </p>
          )}

          <div style={styles.signup}>
            <p style={styles.signupText}>
              Remembered your password?{" "}
              <a href="/" style={styles.signupLink}>
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
