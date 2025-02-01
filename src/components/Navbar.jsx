import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../fw-cuisining.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar pl-4 pr-4  d-flex justify-content-between align-items-center" style={{ height: "120px", }}>
      {/* Logo Section */}
      <div className="Navbar_header">
        <img src="cuisining-newlogo.png" alt="logo" />
      </div>

      {/* Hamburger Button (Visible on Small Screens) */}
      <button
        className="hamburger d-md-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontSize: "24px", background: "none", border: "none", cursor: "pointer" }}
      >
        ☰
      </button>

      {/* Navigation Links and Settings Section (Visible on Small Screens when Hamburger is Open) */}
      <div
        className={`Nav-links-settings ${isOpen ? "nav-open" : "nav-closed"} d-md-none` }
        style={{ position: "absolute", top: "100px", left: "0", width: "100%", background: "transparent", zIndex: 10, }}
      >
        {/* Navigation Links */}
        <div className="Nav-links d-flex flex-column align-items-center pt-7 font-weight-600 td-none">
          <a className="text-decoration-none" href="#Home">Home</a>
          <a className="text-decoration-none" href="#Utensils">Utensil & Ingredients</a>
          <a className="text-decoration-none" href="#Course">Course</a>
          <a className="text-decoration-none" href="#Skillset">Skillset</a>
        </div>
        {/* Settings Section */}
        <div className="settingsec d-flex flex-column align-items-center pb-3 font-weight-600 ">
          <a className="text-decoration-none" href="notif">
            <img src="notif.png" alt="notifications" />  Notification
            
          </a>
          <a className="text-decoration-none" href="setting">
            <img src="settings.png" alt="settings" />  Settings 
          </a>
          <a className="text-decoration-none" href="profile">
            <img src="profile.png" alt="profile" />  Profile
          </a>
          <h5>Manuel</h5>
        </div>
      </div>

      {/* On larger screens, the Nav-links and Settings Section should be visible */}
      <div className="Nav-links w-50 d-flex pt-7 justify-content-around font-weight-600 d-none d-md-flex" style={{ height: "100px" }}>
        <a className="text-decoration-none" href="#Home">Home</a>
        <a className="text-decoration-none" href="#Utensils">Utensil & Ingredients</a>
        <a className="text-decoration-none" href="#Course">Course</a>
        <a className="text-decoration-none" href="#Skillset">Skillset</a>
      </div>

      <div className="settingsec d-none d-md-flex pb-3 w-20">
        <a href="notif">
          <img src="notif.png" alt="notifications" />
        </a>
        <a href="setting">
          <img src="settings.png" alt="settings" />
        </a>
        <a href="profile" id="fetchImage">
          <img src="profile.png" alt="profile" />
        </a>
        <h5 id="fetchFirstname">Manuel</h5>
      </div>
    </nav>
  );
};

export default Navbar;