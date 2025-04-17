import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import "../fw-cuisining.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotifOpenMobile, setIsNotifOpenMobile] = useState(false);
  const [isNotifOpenDesktop, setIsNotifOpenDesktop] = useState(false);
  const [isProfileModalDesktop, setIsProfileModalDesktop] = useState(false);
  const notifRefMobile = useRef(null);
  const notifRefDesktop = useRef(null);
  const profileRefDesktop = useRef(null);
  const [activeLink, setActiveLink] = useState("");

  const [notifications, setNotifications] = useState([]); // State to store fetched notifications
  const [profileData, setProfileData] = useState({
    firstName: "User",
    avatarUrl: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740905480/account_nhrb9f_eizn1j.png",
  });

  const navigate = useNavigate();

  // Function to get the icon based on the notification type
  const getIconForType = (type) => {
    switch (type) {
      case "update":
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841082/refresh_c3zxpa.png"
            alt="Update"
            style={{ width: "20px", height: "20px" }}
          />
        );
      case "new":
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841121/new_tamwbo.png"
            alt="New"
            style={{ width: "20px", height: "20px" }}
          />
        );
      case "reminder":
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741981835/ringing_ieuuli.png"
            alt="Reminder"
            style={{ width: "20px", height: "20px" }}
          />
        );
        case"warnings":
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841354/warning_r5usud.png"
            alt="Warning"
            style={{ width: "20px", height: "20px" }}
          />
        );
      default:
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841082/refresh_c3zxpa.png"
            alt="Default"
            style={{ width: "20px", height: "20px" }}
          />
        );
    }
  };

  // Fetch notifications from the backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("No token found. Please log in.");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/notif/get-notifications", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Backend response:", response.data); // Log the response

        if (response.status === 200) {
          const formattedNotifications = response.data.map((notif) => ({
            id: notif._id,
            message: notif.message,
            type: notif.type,
            icon: getIconForType(notif.type), // Use the getIconForType function
            timestamp: notif.date ? new Date(notif.date.$date || notif.date) : new Date(), // Handle different date formats
          }));
          setNotifications(formattedNotifications);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("No token found. Please log in.");
          return;
        }
        const response = await axios.get("http://localhost:5000/api/profile/profile-data", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          const { fullName, avatarUrl } = response.data.profile;
          const firstName = fullName.split(" ")[0];
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

  // Calculate time difference for notifications
  const getTimeDifference = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(timestamp)) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    } else {
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }
  };

  // Toggle functions
  const toggleNotifMobile = () => setIsNotifOpenMobile(!isNotifOpenMobile);
  const toggleNotifDesktop = () => {
    setIsNotifOpenDesktop(!isNotifOpenDesktop);
    setIsProfileModalDesktop(false);
  };
  const toggleProfileDesktop = () => {
    setIsProfileModalDesktop(!isProfileModalDesktop);
    setIsNotifOpenDesktop(false);
  };

  // Handle click outside notifications and profile modal
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle logout
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
        { headers: { Authorization: `Bearer ${token}` } }
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

  return (
    <>
      <nav className="navbar pl-4 pr-4 d-flex justify-content-between align-items-center" style={{ height: "120px", height: "120px", 
       borderRadius: "40px", backgroundColor: "#ffffff", boxShadow: "0px 5px 10px rgba(98, 98, 98, 0.1)", margin: "0 20px", }}>
    
    <div className="Navbar_header">
      <img src="csuinelogo.png" alt="logo" 
        style={{ height: "auto", marginLeft: "75px" }} 
      />
    </div>
    
        <button className={`hamburger d-md-none ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>☰</button>
        
        <div className="Nav-links w-25 d-none d-md-flex justify-content-around font-weight-600">
        <NavLink to="/home-page" className="text-decoration-none" activeClassName="active">Home</NavLink>

        <div className="dropdown">
        <NavLink to="/Utensils"className="text-decoration-none dropdown-title">Utensils</NavLink>
          <div className="dropdown-content">
            <NavLink to="/Ingredients" className="text-decoration-none">Ingredients</NavLink>
          </div>
        </div>

        <NavLink to="/Courses" className="text-decoration-none" activeClassName="active">Courses</NavLink>

        <div className="dropdown">
          <span className="text-decoration-none dropdown-title">Skillset</span>
          <div className="dropdown-content">
            <NavLink to="/Knife-Skills" className="text-decoration-none">Knife Skills</NavLink>
            <NavLink to="/Mixing-Skills" className="text-decoration-none">Mixing Skills</NavLink>
          </div>
        </div>
      </div>

        <div className="settingsec d-none d-md-flex align-items-center m-4 justify-content-center" ref={profileRefDesktop}>
          <div className="notif-wrapper position-relative" ref={notifRefDesktop}>
            <button className="btn-setting notif-btn" onClick={toggleNotifDesktop}>
              <img src="notification.png" alt="notifications" style={{ width: "33px", height: "33px" }} />
            </button>
            {isNotifOpenDesktop && (
              <div className="notif-dropdown position-absolute" style={{ maxHeight: "300px", overflowY: "auto", textAlign: "left" }}>
                <h2 style={{ textAlign: "left", paddingLeft: "16px" }}>Notifications</h2>
                <hr />
                {notifications.length > 0 ? (
                  notifications.slice(0, 6).map((notif) => (
                    <div key={notif.id}>
                      <div className="notification-item" style={{ paddingLeft: "16px", paddingRight: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                        {notif.icon} {/* Render the icon here */}
                        <div>
                          <p style={{ color: "#000", margin: "8px 0", textAlign: "left", fontSize: "14px" }}>
                            <b>{notif.type.charAt(0).toUpperCase() + notif.type.slice(1)}:</b>{notif.message}
                          </p>
                          <p style={{ color: "#6c757d", margin: "0", fontSize: "12px" }}>
                            {getTimeDifference(notif.timestamp)}
                          </p>
                        </div>
                      </div>
                      <hr style={{ margin: "8px 0", borderColor: "#000000", height: "1px" }} />
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: "left", paddingLeft: "16px" }}>No new notifications</p>
                )}
              </div>
            )}
          </div>
          <button className="btn-setting profile-btn" onClick={toggleProfileDesktop} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={profileData.avatarUrl} style={{ borderRadius: "50%", height: "33px", width: "33px", marginLeft: "-15px" }} alt="profile" />
            <p style={{ margin: 0 }}>{profileData.firstName}</p>
          </button>
          {isProfileModalDesktop && (
            <div className="profile-modal position-absolute p-3 bg-white shadow rounded" style={{ width: "280px", right: "85px", top: "85px", textAlign: "left" }}>
              <div className="d-flex align-items-center" style={{ gap: "9px", marginBottom: "10px" }}>
                <img src={profileData.avatarUrl} alt="Profile" className="rounded-circle" style={{ width: "44px", height: "44px" }} />
                <div>
                  <h6 style={{ margin: 0, fontSize: "17px", fontWeight: "600", marginTop: "3px" }}>{profileData.firstName}</h6>
                  <p style={{ margin: 0, fontSize: "13.5px", color: "#6c757d" }}>Personal account</p>
                </div>
              </div>
              <div className="upgrade-section">
                <button className="btn btn-sm btn-outline-dark w-100 mb-2 upgrade-btn">Upgrade</button>
                <p className="upgrade-text">Unlock and explore more features with our <span className="proaccount">Pro account</span>.</p>
              </div>
              <hr style={{ margin: "0px 0" }} />
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "9px" }} onClick={() => navigate("/profile")}>
                <img src="profileprofile.png" alt="Profile Icon" style={{ width: "17px", height: "17px" }} />Profile
              </button>
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "9px" }} onClick={() => navigate("/settings/personal-details")}>
                <img src="profileSettings.png" alt="Settings and Privacy Icon" style={{ width: "17px", height: "17px" }} />Settings and Privacy
              </button>
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "9px" }} onClick={() => navigate("/Help")}>
                <img src="help.png" alt="Help and Support Icon" style={{ width: "17px", height: "17px" }} />Help and Support
              </button>
              <hr style={{ margin: "12px 0" }} />
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "6px" }} onClick={handleLogout}>
                <img src="logoutnew.png" alt="Logout Icon" style={{ width: "17px", height: "17px" }} />Log out
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="mobile-menu d-md-none p-4 bg-white shadow" style={{ position: "absolute", top: "120px", width: "100%", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "left" }}>
          <div className="d-flex flex-column gap-3" style={{ alignItems: "flex-start", width: "100%", paddingLeft: "16px" }}>
            <a className="text-decoration-none" href="home-page" onClick={() => setIsOpen(false)}>Home</a>
            <a className="text-decoration-none" href="Utensils" onClick={() => setIsOpen(false)}>Utensil & Ingredients</a>
            <a className="text-decoration-none" href="Courses" onClick={() => setIsOpen(false)}>Course</a>
            <a className="text-decoration-none" href="#Skillset" onClick={() => setIsOpen(false)}>Skillset</a>
          </div>
          <hr style={{ width: "100%" }} />
          <div className="d-flex flex-column gap-3" style={{ alignItems: "flex-start", width: "100%", paddingLeft: "16px" }}>
            <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "8px", maxWidth: "300px" }} onClick={toggleNotifMobile} ref={notifRefMobile}>
              <img src="notification.png" alt="notifications" style={{ width: "25px", height: "25px" }} />Notifications
            </button>
            {isNotifOpenMobile && (
              <div className="p-2 border" style={{ width: "100%", maxWidth: "300px", maxHeight: "300px", overflowY: "auto" }}>
                <h2 style={{ textAlign: "left" }}>Notifications</h2>
                {notifications.length > 0 ? (
                  notifications.slice(0, 6).map((notif) => (
                    <div key={notif.id}>
                      <div className="notification-item" style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "16px", paddingRight: "16px" }}>
                        {notif.icon} {/* Render the icon here */}
                        <div>
                          <p style={{ color: "#000", margin: "8px 0", textAlign: "left", fontSize: "14px" }}>
                            <b>{notif.type}:</b> {notif.message}
                          </p>
                          <p style={{ color: "#6c757d", margin: "0", fontSize: "12px" }}>
                            {getTimeDifference(notif.timestamp)}
                          </p>
                        </div>
                      </div>
                      <hr style={{ margin: "8px 0", borderColor: "#e0e0e0" }} />
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: "left" }}>No new notifications</p>
                )}
              </div>
            )}
            <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "8px", maxWidth: "300px" }} onClick={() => { setIsOpen(false); navigate("/profile"); }}>
              <img src="profileprofile.png" alt="Profile Icon" style={{ width: "20px", height: "20px" }} />Profile
            </button>
            <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "8px", maxWidth: "300px" }} onClick={() => { setIsOpen(false); navigate("/Settings"); }}>
              <img src="profileSettings.png" alt="Settings and Privacy Icon" style={{ width: "20px", height: "20px" }} />Settings and Privacy
            </button>
            <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "8px", maxWidth: "300px" }} onClick={() => { setIsOpen(false); navigate("/Help"); }}>
              <img src="help.png" alt="Help and Support Icon" style={{ width: "20px", height: "20px" }} />Help and Support
            </button>
            <hr style={{ width: "100%", maxWidth: "300px" }} />
            <button className="btn w-100 text-left text-danger" onClick={handleLogout} style={{ maxWidth: "300px" }}>
              <img src="logoutnew.png" alt="Logout Icon" style={{ width: "20px", height: "20px" }} />Log out
            </button>
          </div>
        </div>
        
      )}
    </>
  );
};

export default Navbar;