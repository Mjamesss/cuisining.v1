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
  const [avatarUrl, setAvatarUrl] = useState('/developers.png');
  const [error, setError] = useState("");
  const [email, setEmail] = useState(''); // Add a state for email

  const navigate = useNavigate();
  const location = useLocation();

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("User Profile Data:", data); // Log the response
        setFullName(data.fName || ""); // Set the full name from the response
        setEmail(data.email || ""); // Set the email from the response
        return true; // Indicate success
      } else {
        setError("Failed to fetch user profile.");
        return false; // Indicate failure
      }
    } catch (err) {
      setError("An error occurred while fetching user profile.");
      console.error(err);
      return false; // Indicate failure
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

    if (token) {
      localStorage.setItem("authToken", token); // Store token in localStorage
      window.history.replaceState({}, document.title, "/customize-profile"); // Clean up the URL

      // First attempt to fetch user profile
      let retryCount = 0;
      const maxRetries = 2;

      const fetchDataWithRetry = async () => {
        let success = await fetchUserProfile(token);

        // Retry if the first attempt fails
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
    const isNCIIAnswered = hasTakenNCII !== null;
    const isGroup1Answered = selectedGroup1 !== null;
    const isGroup2Answered = selectedGroup2 !== null;
    const isFullNameFilled = fullName.trim() !== '';

    setIsFormComplete(isNCIIAnswered && isGroup1Answered && isGroup2Answered && isFullNameFilled);
  }, [hasTakenNCII, selectedGroup1, selectedGroup2, fullName]);

  useEffect(() => {
    const fullNameElement = document.getElementById('FullName');
    if (fullNameElement) {
      console.log("Updating FullName element:", fullName); // Log the fullName
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
      };
      const response = await fetch("http://localhost:5000/api/profile/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
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
      const response = await fetch("http://localhost:5000/api/profile/upload-avatar", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
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
          <h4 className="mt-3">What’s your motive in learning how to cook?</h4>

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

        <div className="buttonContainer d-flex align-items-center mt-5 mb-5">
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