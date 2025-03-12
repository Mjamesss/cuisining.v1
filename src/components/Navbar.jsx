import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "../fw-cuisining.css";
import axios from "axios"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotifOpenMobile, setIsNotifOpenMobile] = useState(false);
  const [isNotifOpenDesktop, setIsNotifOpenDesktop] = useState(false);
  const [isProfileModalDesktop, setIsProfileModalDesktop] = useState(false);
  const notifRefMobile = useRef(null);
  const notifRefDesktop = useRef(null);
  const profileRefDesktop = useRef(null);
  const [activeLink, setActiveLink] = useState("")

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const [profileData, setProfileData] = useState({
    firstName: "User", // Default first name
    avatarUrl: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740905480/account_nhrb9f_eizn1j.png", // Default avatar
  });
  const navigate = useNavigate();


  const toggleNotifMobile = () => {
    setIsNotifOpenMobile(!isNotifOpenMobile);
  };

  const toggleNotifDesktop = () => {
    setIsNotifOpenDesktop(!isNotifOpenDesktop);
    setIsProfileModalDesktop(false);
  };

  const toggleProfileDesktop = () => {
    setIsProfileModalDesktop(!isProfileModalDesktop);
    setIsNotifOpenDesktop(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRefMobile.current && !notifRefMobile.current.contains(event.target)) {
        setIsNotifOpenMobile(false);
      }
      if (notifRefDesktop.current && !notifRefDesktop.current.contains(event.target)) {
        setIsNotifOpenDesktop(false);
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
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        localStorage.removeItem("authToken");
        window.location.href = "/";
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred during logout. Please try again.");
    }
  };
  //backend codes
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log("Token in Navbar:", token); // Log the token for debugging
  
        if (!token) {
          console.error("No token found. Please log in.");
          return;
        }
  
        const response = await axios.get("http://localhost:5000/api/profile/profile-data", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        console.log("Profile Data Response:", response.data); // Log the response
  
        if (response.status === 200) {
          const { fullName, avatarUrl } = response.data.profile;
  
          // Extract the first name
          const firstName = fullName.split(" ")[0];
  
          // Update state with fetched data
          setProfileData({
            firstName,
            avatarUrl: avatarUrl || "https://via.placeholder.com/150",
          });
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
  
    fetchProfileData();
  }, []);
  //important to continuation of token
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (token) {
    localStorage.setItem("authToken", token); // Store token in localStorage
    window.history.replaceState({}, document.title, "/customize-profile"); // Clean up the URL
  }

  return (
    <>
      <nav className="navbar pl-4 pr-4 d-flex justify-content-between align-items-center" style={{ height: "120px" }}>
        <div className="Navbar_header">
          <img src="ter.png" alt="logo" />
        </div>
        {/* Hamburger button always visible on mobile */}
        <button className={`hamburger d-md-none ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>☰</button>
        {/* Desktop Navigation */}
        <div className="Nav-links w-50 d-none d-md-flex pt-7 justify-content-around font-weight-600">
        <NavLink to="/home-page" className="text-decoration-none" activeClassName="active">
    Home
  </NavLink>
  <NavLink to="/Utensils" className="text-decoration-none" activeClassName="active">
    Utensil & Ingredients
  </NavLink>
  <NavLink to="/Courses" className="text-decoration-none" activeClassName="active">
    Course
  </NavLink>
  <NavLink to="/Skillset" className="text-decoration-none" activeClassName="active">
    Skillset
  </NavLink>
        </div>
        {/* Desktop Settings Section */}
        <div className="settingsec d-none d-md-flex align-items-center m-4 justify-content-center" ref={profileRefDesktop}>
          <div className="notif-wrapper position-relative" ref={notifRefDesktop}>
            <button className="btn-setting notif-btn" onClick={toggleNotifDesktop}>
              <img src="notification.png" alt="notifications" style={{width:"33px",height:"33px"}}/> </button>
            {isNotifOpenDesktop && (<div className="notif-dropdown position-absolute">
                <h2>Notifications</h2>
                <p>No new notifications</p>
              </div> )}
          </div>
          <button className="btn-setting profile-btn" onClick={toggleProfileDesktop} style={{ display: "flex", alignItems: "center", gap: "8px" }} >
            <img src={profileData.avatarUrl} style={{borderRadius:"50%", height:"33px", width:"33px", marginLeft: "-8px"}} alt="profile" />
            <p style={{ margin: 0 }}>{profileData.firstName}</p>
          </button>
          {isProfileModalDesktop && (
            <div className="profile-modal position-absolute p-3 bg-white shadow rounded" style={{ width: "280px", right: "80px", top: "95px" }}>
              <div className="d-flex align-items-center" style={{ gap: "9px", marginBottom: "10px" }}>
                <img src={profileData.avatarUrl} alt="Profile"
                  className="rounded-circle"
                  style={{ width: "44px", height: "44px" }} />
              <div>
                <h6 style={{ margin: 0, fontSize: "17px", fontWeight: "600", marginTop: "3px" }}>
                  {profileData.firstName}
                </h6>
                <p style={{ margin: 0, fontSize: "13.5px", color: "#6c757d",}}>
                  Personal account
                </p>
              </div>
              </div>
              <div className="upgrade-section">
              <button className="btn btn-sm btn-outline-dark w-100 mb-2 upgrade-btn">
                Upgrade
              </button>
              <p className="upgrade-text">
                Unlock and explore more features with our <span className="proaccount">Pro account</span>.
              </p>
            </div>
              <hr style={{ margin: "0px 0" }}/>
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "9px", }} onClick={() => navigate("/Settings")} >
                <img src="profileprofile.png" alt="Profile Icon" style={{ width: "17px", height: "17px" }}/>
                Profile
              </button>
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center",  gap: "9px", }} onClick={() => navigate("/Settings")} >
                <img src="profileSettings.png" alt="Settings and Privacy Icon" style={{ width: "17px", height: "17px" }}/>
                Settings and Privacy
              </button>
              <button className="btn w-100 text-left" style={{  display: "flex", alignItems: "center", gap: "9px",}} onClick={() => navigate("/Help")}>
                <img  src="help.png" alt="Help and Support Icon" style={{ width: "17px", height: "17px" }} />
                Help and Support
              </button>
              <hr style={{ margin: "12px 0" }}/>
              <button
              className="btn w-100 text-left"
              style={{ display: "flex", alignItems: "center", gap: "6px"}} // Add the same styles here
              onClick={handleLogout}>
              <img src="logoutnew.png" alt="Logout Icon" style={{ width: "17px", height: "17px"}} />
              Log out
            </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="mobile-menu d-md-none p-4 bg-white shadow" style={{ position: "absolute", top: "120px", width: "100%",  zIndex: 999,display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", }}>
          <div className="d-flex flex-column gap-3" style={{ alignItems: "center", textAlign: "center" }} >
            <a className="text-decoration-none"  href="home-page" onClick={() => setIsOpen(false)}> Home</a>
            <a className="text-decoration-none"  href="Utensils" onClick={() => setIsOpen(false)}>
              Utensil & Ingredients
            </a>
            <a className="text-decoration-none" href="Courses" onClick={() => setIsOpen(false)} >
              Course
            </a>
            <a className="text-decoration-none" href="#Skillset"
              onClick={() => setIsOpen(false)}
            >
              Skillset
            </a>
          </div>
          <hr style={{ width: "100%" }} />
          {/* Mobile notification and profile options */}
          <div
            className="d-flex flex-column gap-3"
            style={{ alignItems: "center", textAlign: "center" }}
          >
            <button
              className="btn w-100 text-left"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                maxWidth: "300px",
              }}
              onClick={() => {
                toggleNotifMobile();
              }}
              ref={notifRefMobile}
            >
              <img
                src="notification.png"
                alt="notifications"
                style={{ width: "25px", height: "25px" }}
              />
              Notifications
            </button>
            {isNotifOpenMobile && (
              <div className="p-2 border" style={{ width: "100%", maxWidth: "300px" }}>
                <h2>Notifications</h2>
                <p>No new notifications</p>
              </div>
            )}
            <button
              className="btn w-100 text-left"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                maxWidth: "300px",
              }}
              onClick={() => {
                setIsOpen(false);
                navigate("/profile");
              }}
            >
              <img
                src="profileprofile.png"
                alt="Profile Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Profile
            </button>
            <button
              className="btn w-100 text-left"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                maxWidth: "300px",
              }}
              onClick={() => {
                setIsOpen(false);
                navigate("/Settings");
              }}
            >
              <img
                src="profileSettings.png"
                alt="Settings and Privacy Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Settings and Privacy
            </button>
            <button
              className="btn w-100 text-left"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                maxWidth: "300px",
              }}
              onClick={() => {
                setIsOpen(false);
                navigate("/Help");
              }}
            >
              <img
                src="help.png"
                alt="Help and Support Icon"
                style={{ width: "20px", height: "20px" }}
              />
              Help and Support
            </button>
            <hr style={{ width: "100%", maxWidth: "300px" }} />
            <button
              className="btn w-100 text-left text-danger"
              onClick={handleLogout}
              style={{ maxWidth: "300px" }}
            >
              <img
                src="logoutnew.png"
                alt="Logout Icon"
                style={{ width: "20px", height: "20px"}}
              />
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
