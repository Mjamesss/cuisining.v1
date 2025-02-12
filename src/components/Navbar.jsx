import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "../fw-cuisining.css";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotifOpenMobile, setIsNotifOpenMobile] = useState(false);
  const [isNotifOpenDesktop, setIsNotifOpenDesktop] = useState(false);
  const [isProfileModalMobile, setIsProfileModalMobile] = useState(false);
  const [isProfileModalDesktop, setIsProfileModalDesktop] = useState(false);
  const notifRefMobile = useRef(null);
  const notifRefDesktop = useRef(null);
  const profileRefMobile = useRef(null);
  const profileRefDesktop = useRef(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRefMobile.current && !notifRefMobile.current.contains(event.target)) {
        setIsNotifOpenMobile(false);
      }
      if (notifRefDesktop.current && !notifRefDesktop.current.contains(event.target)) {
        setIsNotifOpenDesktop(false);
      }
      if (profileRefMobile.current && !profileRefMobile.current.contains(event.target)) {
        setIsProfileModalMobile(false);
      }
      if (profileRefDesktop.current && !profileRefDesktop.current.contains(event.target)) {
        setIsProfileModalDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Correct token key
      console.log("Token from localStorage:", token); // Log the token
  
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }
  
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout", // Correct backend URL
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
          },
        }
      );
  
      if (response.status === 200) {
        localStorage.removeItem("authToken"); // Clear the token with the correct key
        window.location.href = "/"; // Redirect to home page
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
        alert(`Logout failed: ${error.response.data.message}`);
      } else {
        alert("An error occurred during logout. Please try again.");
      }
    }
};

  return (
    <nav className="navbar pl-4 pr-4 d-flex justify-content-between align-items-center" style={{ height: "120px" }}>
      {/* Logo Section */}
      <div className="Navbar_header">
        <img src="cuisining-newlogo.png" alt="logo" />
      </div>

      {/* Hamburger Button (Mobile) */}
      <button className={`hamburger d-md-none ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
      <div className={`Nav-links-settings ${isOpen ? "nav-open" : "nav-closed"} d-md-none`}>
        <div className="Nav-links d-flex flex-column align-items-center pt-7 font-weight-600 td-none">
          <a className="text-decoration-none" href="home-page">Home</a>
          <a className="text-decoration-none" href="Utensils">Utensil & Ingredients</a>
          <a className="text-decoration-none" href="#Course">Course</a>
          <a className="text-decoration-none" href="#Skillset">Skillset</a>
        </div>

        {/* Mobile Settings Section */}
        <div className="settingsec d-flex flex-column align-items-center pb-3 font-weight-600" ref={profileRefMobile}>
          {/* Mobile Notifications */}
          <div ref={notifRefMobile}>
            <button className="btn-setting notif-btn" onClick={() => setIsNotifOpenMobile(!isNotifOpenMobile)}>
              <img src="notif.png" alt="notifications" /> Notification
            </button>
            {isNotifOpenMobile && (
              <div className="notif-dropdown">
                <h2>Notifications</h2>
                <p>No new notifications</p>
              </div>
            )}
          </div>

          <button className="btn-setting">
            <img src="settings.png" alt="settings" /> Settings
          </button>

          {/* Mobile Profile Button */}
          <button className="btn-setting profile-btn" onClick={() => setIsProfileModalMobile(!isProfileModalMobile)}>
            <img src="profile.png" alt="profile" /> Profile
          </button>

          <h5>Manuel</h5>

          {/* Mobile Profile Modal */}
          {isProfileModalMobile && (
            <div className="profile-modal">
              <button className="profile-option">View Profile</button>
              <button className="profile-option logout-btn">Log Out</button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="Nav-links w-50 d-flex pt-7 justify-content-around font-weight-600 d-none d-md-flex">
        <a className="text-decoration-none" href="home-page">Home</a>
        <a className="text-decoration-none" href="Utensils">Utensil & Ingredients</a>
        <a className="text-decoration-none" href="#Course">Course</a>
        <a className="text-decoration-none" href="#Skillset">Skillset</a>
      </div>

      {/* Desktop Settings Section */}
      <div className="settingsec d-none d-md-flex align-items-center gap-3" ref={profileRefDesktop}>
        {/* Desktop Notifications */}
        <div className="notif-wrapper position-relative" ref={notifRefDesktop}>
          <button className="btn-setting notif-btn" onClick={() => setIsNotifOpenDesktop(!isNotifOpenDesktop)}>
            <img src="notif.png" alt="notifications" />
          </button>
          {isNotifOpenDesktop && (
            <div className="notif-dropdown position-absolute">
              <h2>Notifications</h2>
              <p>No new notifications</p>
            </div>
          )}
        </div>

        <button className="btn-setting">
          <img src="settings.png" alt="settings" />
        </button>

        {/* Desktop Profile Button */}
        <button className="btn-setting profile-btn" onClick={() => setIsProfileModalDesktop(!isProfileModalDesktop)}>
          <img src="profile.png" alt="profile" />
        </button>

        <h5>Manuel</h5>

        {/* Desktop Profile Modal */}
        {isProfileModalDesktop && (
          <div className="profile-modal">
            <button className="profile-option">View Profile</button>
            <button className="profile-option logout-btn" onClick={handleLogout}>Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
