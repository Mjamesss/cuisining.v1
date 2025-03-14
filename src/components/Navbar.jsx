import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const [activeLink, setActiveLink] = useState("");

  const [notifications, setNotifications] = useState([
    { id: 1, message: "Update: Here is your first notification!", type: "update", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841082/refresh_c3zxpa.png" },
    { id: 2, message: "Reminder: Your course starts tomorrow!", type: "reminder", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841253/bell_cofdvd.png" },
    { id: 3, message: "New: Check out the latest utensils added!", type: "new", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841121/new_tamwbo.png" },
    { id: 4, message: "Alert: Your profile is 80% complete!", type: "alert", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841354/warning_r5usud.png" },
    { id: 5, message: "Update: New recipes added to your favorites!", type: "update", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841082/refresh_c3zxpa.png" },
    { id: 6, message: "Reminder: Don't forget to complete your profile!", type: "reminder", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841253/bell_cofdvd.png" },
    { id: 7, message: "New: Exclusive discounts on cooking tools!", type: "new", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841121/new_tamwbo.png" },
    { id: 8, message: "Alert: Your subscription is about to expire!", type: "alert", icon: "https://res.cloudinary.com/dm6wodni6/image/upload/v1741841354/warning_r5usud.png" },
  ]);

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const [profileData, setProfileData] = useState({
    firstName: "User",
    avatarUrl: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740905480/account_nhrb9f_eizn1j.png",
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

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (token) {
    localStorage.setItem("authToken", token);
    window.history.replaceState({}, document.title, "/customize-profile");
  }

  return (
    <>
      <nav className="navbar pl-4 pr-4 d-flex justify-content-between align-items-center" style={{ height: "120px",boxShadow: "0px 5px 10px rgba(98, 98, 98, 0.1)" }}>
        <div className="Navbar_header">
          <img src="ter.png" alt="logo" />
        </div>
        <button className={`hamburger d-md-none ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>☰</button>
        <div className="Nav-links w-50 d-none d-md-flex justify-content-around font-weight-600">
          <NavLink to="/home-page" className="text-decoration-none" activeClassName="active">Home</NavLink>
          <NavLink to="/Utensils" className="text-decoration-none" activeClassName="active">Utensil & Ingredients</NavLink>
          <NavLink to="/Courses" className="text-decoration-none" activeClassName="active">Course</NavLink>
          <NavLink to="/Skillset" className="text-decoration-none" activeClassName="active">Skillset</NavLink>
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
                  notifications.slice(0, 6).map((notif, index) => (
                    <div key={notif.id}>
                      <div className="notification-item" style={{ paddingLeft: "16px", paddingRight: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                        <img src={notif.icon} alt={notif.type} style={{ width: "30px", height: "30px" }} /> {/* Image Icon */}
                        <p style={{ color: "#000", margin: "8px 0", textAlign: "left", fontSize: "14px" }}>
                          <b>{notif.type}:</b> {notif.message}
                        </p>
                      </div>
                      {index !== notifications.length - 1 && <hr style={{ margin: "8px 0", borderColor: "#000000", height: "1px" }} />}
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: "left", paddingLeft: "16px" }}>No new notifications</p>
                )}
              </div>
            )}
          </div>
          <button className="btn-setting profile-btn" onClick={toggleProfileDesktop} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src={profileData.avatarUrl} style={{ borderRadius: "50%", height: "33px", width: "33px", marginLeft: "-8px" }} alt="profile" />
            <p style={{ margin: 0 }}>{profileData.firstName}</p>
          </button>
          {isProfileModalDesktop && (
            <div className="profile-modal position-absolute p-3 bg-white shadow rounded" style={{ width: "280px", right: "80px", top: "95px", textAlign: "left" }}>
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
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "9px" }} onClick={() => navigate("/Settings")}>
                <img src="profileprofile.png" alt="Profile Icon" style={{ width: "17px", height: "17px" }} />Profile
              </button>
              <button className="btn w-100 text-left" style={{ display: "flex", alignItems: "center", gap: "9px" }} onClick={() => navigate("/Settings")}>
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
                  notifications.slice(0, 6).map((notif, index) => (
                    <div key={notif.id}>
                      <div className="notification-item" style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "16px", paddingRight: "16px" }}>
                        <img src={notif.icon} alt={notif.type} style={{ width: "30px", height: "30px" }} /> {/* Image Icon */}
                        <p style={{ color: "#000", margin: "8px 0", textAlign: "left", fontSize: "14px" }}>
                          <b>{notif.type}:</b> {notif.message}
                        </p>
                      </div>
                      {index !== notifications.length - 1 && <hr style={{ margin: "8px 0", borderColor: "#e0e0e0" }} />}
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