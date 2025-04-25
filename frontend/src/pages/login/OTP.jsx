import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Done = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      console.error("Authorization token not found.");
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      fetchUserProfile(token);
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/profile",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      ).catch(() =>
        fetch("https://cuisining-v1.onrender.com/api/auth/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
      );
      

      if (response.ok) {
        const data = await response.json();
        if (data.isProfileCustomized) {
          navigate("/home-page");
        } else {
          navigate("/customize-profile");
        }
      } else {
        console.error("Failed to fetch user profile.");
        navigate("/");
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
      navigate("/");
    }
  };

  const handleContinue = () => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      fetchUserProfile(token);
    } else {
      navigate("/");
    }
  };

  const styles = {
    background: {
      backgroundImage: "url('https://res.cloudinary.com/dm6wodni6/image/upload/v1738813637/login-bg_n5skpt.png')",
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
      textAlign: "center",
    },
    heading: {
      fontSize: "35px",
      color: "#363100",
      fontWeight: "800",
      marginBottom: "20px",
    },
    logo: {
      width: "50px",
      height: "50px",
      marginBottom: "20px",
    },
    message: {
      fontSize: "16px",
      color: "#363100",
      fontWeight: "300",
      marginBottom: "20px",
    },
    countdown: {
      fontSize: "20px",
      color: "#C1B857",
      fontWeight: "700",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      fontWeight: "700",
      cursor: "pointer",
      border: "none",
      fontSize: "16px",
      width: "100%",
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          {/* Check mark logo */}
          <img src="success.png" alt="Success" style={styles.logo} />
          {/* Heading */}
          <h2 style={styles.heading}>Welcome!</h2>
          {/* Success message */}
          <p style={styles.message}>
            Account Created successfully. Thank You!
          </p>
          {/* Countdown Message */}
          <p style={styles.countdown}>
            Redirecting to homepage in {countdown} seconds...
          </p>
          {/* Continue Button */}
          <button style={styles.button} onClick={handleContinue}>
            Continue Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Done;