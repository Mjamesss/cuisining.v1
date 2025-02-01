import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../fw-cuisining.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <nav className="navbar pl-4 pr-4 d-flex justify-content-between align-items-center" style={{ height: "120px" }}>
      {/* Logo Section */}
      <div className="Navbar_header">
        <img src="cuisining-newlogo.png" alt="logo" />
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className={`hamburger d-md-none ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div className={`Nav-links-settings ${isOpen ? "nav-open" : "nav-closed"} d-md-none`}>
        <div className="Nav-links d-flex flex-column align-items-center pt-7 font-weight-600 td-none">
          <a className="text-decoration-none" href="#Home">Home</a>
          <a className="text-decoration-none" href="#Utensils">Utensil & Ingredients</a>
          <a className="text-decoration-none" href="#Course">Course</a>
          <a className="text-decoration-none" href="#Skillset">Skillset</a>
        </div>

        {/* Settings Section (Mobile) */}
        <div className="settingsec d-flex flex-column align-items-center pb-3 font-weight-600">
          <button className="btn-setting notif-btn" onClick={() => setIsNotifOpen(!isNotifOpen)}>
            <img src="notif.png" alt="notifications" /> Notification
          </button>
          <button className="btn-setting">
            <img src="settings.png" alt="settings" /> Settings
          </button>
          <button className="btn-setting">
            <img src="profile.png" alt="profile" /> Profile
          </button>
          <h5>Manuel</h5>

          {/* Notification Dropdown (Mobile) */}
          {isNotifOpen && (
            <div className="notif-dropdown">
              <h2>Notifications</h2>
              <p>No new notifications</p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="Nav-links w-50 d-flex pt-7 justify-content-around font-weight-600 d-none d-md-flex">
        <a className="text-decoration-none" href="#Home">Home</a>
        <a className="text-decoration-none" href="#Utensils">Utensil & Ingredients</a>
        <a className="text-decoration-none" href="#Course">Course</a>
        <a className="text-decoration-none" href="#Skillset">Skillset</a>
      </div>

      {/* Settings Section (Desktop) */}
      <div className="settingsec d-none d-md-flex pb-3 w-20">
        <div className="notif-wrapper">
          <button className="btn-setting notif-btn" onClick={() => setIsNotifOpen(!isNotifOpen)}>
            <img src="notif.png" alt="notifications" />
          </button>

          {/* Notification Dropdown (Desktop) */}
          {isNotifOpen && (
            <div className="notif-dropdown">
              <h2>Notifications</h2>
              <p>No new notifications</p>
            </div>
          )}
        </div>

        <button className="btn-setting">
          <img src="settings.png" alt="settings" />
        </a>
        <a href="profile">
          <img src="profile.png" alt="profile" />
        </a>
        <h5>Manuel</h5>
      </div>
    </nav>
  );
};

export default Navbar;
