import "../../fw-cuisining.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileForm = () => {
  const [selectedGroup1, setSelectedGroup1] = useState(null);
  const [selectedGroup2, setSelectedGroup2] = useState(null);
  const [showNotif, setShowNotif] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [hasTakenNCII, setHasTakenNCII] = useState(null);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('https://res.cloudinary.com/dm6wodni6/image/upload/v1740905480/account_nhrb9f_eizn1j.png');
  const [error, setError] = useState("");
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  
  const fetchUserProfile = async (token) => {
    try {
      const profileResponse = await fetch(
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
      
    
      if (!profileResponse.ok) {
        setError("Failed to fetch user profile.");
        console.error("Profile fetch error:", await profileResponse.text());
        return false;
      }
  
      const profileData = await profileResponse.json();
      console.log("User Profile Data:", profileData);

      const gprofResponse = await fetch(
        "http://localhost:5000/api/profile/gprof",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      ).catch(() =>
        fetch("https://cuisining-v1.onrender.com/api/profile/gprof", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
      );
      
      if (!gprofResponse.ok) {
        setError("Failed to fetch profile picture.");
        console.error("Profile picture fetch error:", await gprofResponse.text());
        return false;
      }
  
      const gprofData = await gprofResponse.json();
      console.log("Profile Picture Data:", gprofData);
  
      setFullName(profileData.fName || "");
      setEmail(profileData.email || "");
      setAvatarUrl(gprofData.profilePicture);
  
      return true;
    } catch (err) {
      setError("An error occurred while fetching user profile.");
      console.error(err);
      return false;
    }
  };

  useEffect(() => {
    if (location.pathname === '/customize-profile') {
      setIsModalOpen(true);
    }
  }, [location]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const fNameFromQuery = urlParams.get("fName");
    const emailFromQuery = urlParams.get("email");
  
    if (token) {
      localStorage.setItem("authToken", token);
      window.history.replaceState({}, document.title, "/customize-profile");
  
      if (fNameFromQuery) setFullName(decodeURIComponent(fNameFromQuery));
      if (emailFromQuery) setEmail(decodeURIComponent(emailFromQuery));
  
      let retryCount = 0;
      const maxRetries = 2;
      const fetchDataWithRetry = async () => {
        let success = await fetchUserProfile(token);
        while (!success && retryCount < maxRetries) {
          retryCount++;
          console.log(`Retrying fetch attempt ${retryCount}...`);
          success = await fetchUserProfile(token);
        }
        if (!success) {
          setError("Unable to load profile data after multiple attempts.");
        }
      };
      fetchDataWithRetry();
    } else {
      setError("Authorization token not found.");
    }
  }, []);

  useEffect(() => {
    // Updated form completion check with new fields
    const isComplete = (
      fullName.trim() !== '' &&
      selectedGroup1 !== null &&
      selectedGroup2 !== null &&
      hasTakenNCII !== null &&
      contactNumber.trim() !== '' &&
      gender !== '' &&
      country !== '' &&
      (country !== "Philippines" || region !== '')
    );
    setIsFormComplete(isComplete);
  }, [fullName, selectedGroup1, selectedGroup2, hasTakenNCII, contactNumber, gender, country, region]);

  useEffect(() => {
    const fullNameElement = document.getElementById('FullName');
    if (fullNameElement) {
      fullNameElement.textContent = fullName || 'John Manuel Cuerdo';
    }
  }, [fullName]);

  const handleGroup1Change = (id) => setSelectedGroup1(id);
  const handleGroup2Change = (id) => setSelectedGroup2(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      setError("Please fill out all required fields.");
      return;
    }
    try {
      const finalAvatarUrl = avatarUrl || "https://example.com/default-avatar.png";
      const token = localStorage.getItem("authToken");
      
      const payload = {
        fullName,
        avatarUrl: finalAvatarUrl,
        selectedGroup1,
        selectedGroup2,
        hasTakenNCII,
        region,
        country,
        contactNo: contactNumber,
        gender
      };

      const response = await fetch(
        "http://localhost:5000/api/profile/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      ).catch(() =>
        fetch("https://cuisining-v1.onrender.com/api/profile/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        })
      );
      
      

      const data = await response.json();
      
      if (response.ok) {
        navigate("/home-page");
      } else {
        setError(data.message || "Failed to submit profile.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setAvatarUrl(e.target.result);
    reader.readAsDataURL(file);
  
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("userId", localStorage.getItem("userId"));
  
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(
        "http://localhost:5000/api/profile/upload-avatar",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      ).catch(() =>
        fetch("https://cuisining-v1.onrender.com/api/profile/upload-avatar", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        })
      );
      
      const data = await response.json();
      if (response.ok) {
        setAvatarUrl(data.avatarUrl);
      } else {
        setError(data.message || "Failed to upload avatar.");
      }
    } catch (err) {
      setError("An error occurred while uploading the avatar.");
      console.error(err);
    }
  };

  const handleOkayClick = () => {
    if (agreeToTerms) {
      setIsModalOpen(false);
    } else {
      setShowNotif(true);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    if (showNotif) {
      const timer = setTimeout(() => setShowNotif(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotif]);

  return (
    <>
      <div className="container d-flex flex-column align-items-start">
        <h1 className="align-self-start mt-5 font-weight-900">Cuisining</h1>
        <h3 className="align-self-start mt-3 ml-3 font-weight-600">Customize Profile</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="d-flex w-100">
          {/* Left Column - Original Fields */}
          <div className="flex-grow-1 pe-4" style={{ width: '50%' }}>
            <div className="d-flex align-items-center">
              <label htmlFor="avatar-upload" style={{ cursor: 'pointer' }}>
                <img
                  src={avatarUrl}
                  alt="User Avatar"
                  style={{ width: "200px", height: "200px", borderRadius: "50%" }}
                />
                <input
                  type="file"
                  id="avatar-upload"
                  name="avatar"
                  onChange={handleAvatarUpload}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </label>
              <div className="ms-3">
                <p className="mb-1 ml-5 font-weight-500" id="FullName">
                  {fullName || "Loading..."}
                </p>
                <p className="mb-0 ml-5 font-weight-400">
                  {email || "Loading..."}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="normal-textbox">Full Name</label>
              <input
                type="text"
                id="normal-textbox"
                className="input-text"
                placeholder="Enter full name here..."
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <h4>Have you taken any NCII Cookery course?</h4>
              <button
                className={`cbtn ${hasTakenNCII === true ? 'cbtn-secondary active' : 'cbtn-outline-secondary'} ml-3`}
                onClick={() => setHasTakenNCII(true)}
              >
                Yes
              </button>
              <button
                className={`cbtn ${hasTakenNCII === false ? 'cbtn-secondary active' : 'cbtn-outline-secondary'} ml-3`}
                onClick={() => setHasTakenNCII(false)}
              >
                No
              </button>
            </div>

            <div className="d-flex flex-column align-items-start mt-3">
              <h4 className="mt-3">Do you have any experience in cooking before?</h4>
              <div className="form-check">
                <input
                  type="radio"
                  id="customCheckbox1"
                  className="checkbox"
                  checked={selectedGroup1 === '1'}
                  onChange={() => handleGroup1Change('1')}
                />
                <label htmlFor="customCheckbox1" className="checkbox-label">Do you have experience in cooking?</label>
              </div>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  id="customCheckbox2"
                  className="checkbox"
                  checked={selectedGroup1 === '2'}
                  onChange={() => handleGroup1Change('2')}
                />
                <label htmlFor="customCheckbox2" className="checkbox-label">I have a bit of experience in cooking</label>
              </div>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  id="customCheckbox3"
                  className="checkbox"
                  checked={selectedGroup1 === '3'}
                  onChange={() => handleGroup1Change('3')}
                />
                <label htmlFor="customCheckbox3" className="checkbox-label">I have no experience at all</label>
              </div>
            </div>

            <div className="d-flex flex-column align-items-start mt-3">
              <h4 className="mt-3">What's your motive in learning how to cook?</h4>
              <div className="form-check">
                <input
                  type="radio"
                  id="customCheckbox4"
                  className="checkbox"
                  checked={selectedGroup2 === '4'}
                  onChange={() => handleGroup2Change('4')}
                />
                <label htmlFor="customCheckbox4" className="checkbox-label">School Purposes (BSHM Student, taking NCII, etc.)</label>
              </div>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  id="customCheckbox5"
                  className="checkbox"
                  checked={selectedGroup2 === '5'}
                  onChange={() => handleGroup2Change('5')}
                />
                <label htmlFor="customCheckbox5" className="checkbox-label">Home Cooking</label>
              </div>
              <div className="form-check mt-3">
                <input
                  type="radio"
                  id="customCheckbox6"
                  className="checkbox"
                  checked={selectedGroup2 === '6'}
                  onChange={() => handleGroup2Change('6')}
                />
                <label htmlFor="customCheckbox6" className="checkbox-label">Others</label>
              </div>
            </div>
          </div>

          {/* Right Column - New Fields */}
          <div className="flex-grow-1 ps-4" style={{ width: '50%' }}>
            <div className="mt-3">
              <label htmlFor="contact-number">Contact Number</label>
              <input
                type="tel"
                id="contact-number"
                className="input-text"
                placeholder="Enter contact number..."
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>

            <div className="mt-3">
              <label htmlFor="gender-select">Gender</label>
              <select
                id="gender-select"
                className="input-text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled className="text-muted">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mt-3">
              <label htmlFor="country-select">Country</label>
              <select
                id="country-select"
                className="input-text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="" disabled className="text-muted">Select Country</option>
                <option value="Philippines">Philippines</option>
              </select>
            </div>

            {country === "Philippines" && (
              <div className="mt-3">
                <label htmlFor="region-select">Region (Philippines)</label>
                <select
                  id="region-select"
                  className="input-text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                >
                  <option value="" disabled className="text-muted">Select Region</option>
                  <option value="NCR">National Capital Region (NCR)</option>
                  <option value="CAR">Cordillera Administrative Region (CAR)</option>
                  <option value="Region I">Ilocos Region (Region I)</option>
                  <option value="Region II">Cagayan Valley (Region II)</option>
                  <option value="Region III">Central Luzon (Region III)</option>
                  <option value="Region IV-A">CALABARZON (Region IV-A)</option>
                  <option value="MIMAROPA">MIMAROPA</option>
                  <option value="Region V">Bicol Region (Region V)</option>
                  <option value="Region VI">Western Visayas (Region VI)</option>
                  <option value="Region VII">Central Visayas (Region VII)</option>
                  <option value="Region VIII">Eastern Visayas (Region VIII)</option>
                  <option value="Region IX">Zamboanga Peninsula (Region IX)</option>
                  <option value="Region X">Northern Mindanao (Region X)</option>
                  <option value="Region XI">Davao Region (Region XI)</option>
                  <option value="Region XII">SOCCSKSARGEN (Region XII)</option>
                  <option value="Region XIII">Caraga (Region XIII)</option>
                  <option value="BARMM">Bangsamoro (BARMM)</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="buttonContainer d-flex align-items-center mt-5 mb-5 w-100 justify-content-center">
          <button
            className={`cbtn cbtn-success ml-4 ${!isFormComplete ? 'opacity-5 no-hover' : ''}`}
            disabled={!isFormComplete}
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button className="cbtn cbtn-outline-secondary ml-3" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

        {isModalOpen && (
          <div className="cmodal-overlay show">
            <div className="cmodal d-flex flex-column align-items-start" style={{ width: "1100px" }}>
              <div className="cmodal-header d-flex justify-content-center w-100 position-relative">
                <h3 className="cmodal-title">TERMS & CONDITIONS</h3>
              </div>
              <div className="cmodal-body text-left">
                <p>Welcome to Cuisining! By accessing or using our platform, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully. If you do not agree with these terms, do not use our platform.</p>
                <br /><p>By registering for and using our 3D Web Cooking Simulator, you confirm that you are at least 18 years old or have parental consent to use the platform. You also agree to these Terms and Conditions and our Privacy Policy.</p>
                <b>User Data Collection</b><br />
                <p>We collect certain personal information to provide and improve our services. This includes but is not limited to:</p><br />
                <p><b>Email Address:</b> For account creation, communication, and updates.</p><br />
                <p><b>Password:</b> For secure account access.</p><br />
                <p><b>Personal Information:</b> Such as your name, date of birth, and any additional details you choose to provide.</p><br />
                <p>Your data will be securely stored and used only for purposes related to the functioning of the platform, such as account management, gameplay enhancement, and communication. For more details, refer to our Privacy Policy.</p>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="customCheckbox7"
                  className="checkbox"
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                />
                <label htmlFor="customCheckbox7" className="checkbox-label">I agree to the Terms & Conditions</label>
              </div>

              <div className="cmodal-footer d-flex justify-content-center w-100">
                <button
                  className={`cbtn cbtn-secondary ${!agreeToTerms ? 'opacity-5 no-hover' : ''}`}
                  onClick={handleOkayClick}
                  disabled={!agreeToTerms}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="bg-dark text-white text-center py-3">
          &copy; 2024 Your Website
        </footer>

        {showNotif && (
          <div className="notif-container show">
            <p>You need to check the box to proceed.</p>
          </div>
        )}
      </>
  );
};

export default ProfileForm;