import "../../fw-cuisining.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileForm = () => {
  const [selectedGroup1, setSelectedGroup1] = useState(null); // 1-3
  const [selectedGroup2, setSelectedGroup2] = useState(null); // 4-6
  const [showNotif, setShowNotif] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false); // New state to track form completion
  const [hasTakenNCII, setHasTakenNCII] = useState(null); // null, true, or false
  const [agreeToTerms, setAgreeToTerms] = useState(false); // Track if user agrees to terms
  const [fullName, setFullName] = useState(''); // Track full name input

  const navigate = useNavigate();
  const location = useLocation();

  // Open modal when the path matches '/customize-profile'
  useEffect(() => {
    if (location.pathname === '/customize-profile') {
      setIsModalOpen(true);
    }
  }, [location]);

  // Update isFormComplete whenever required fields change
  useEffect(() => {
    const isNCIIAnswered = hasTakenNCII !== null; // Check if NCII question is answered
    const isGroup1Answered = selectedGroup1 !== null; // Check if Group 1 is answered
    const isGroup2Answered = selectedGroup2 !== null; // Check if Group 2 is answered
    const isFullNameFilled = fullName.trim() !== ''; // Check if full name is filled

    // Set isFormComplete to true only if ALL conditions are met
    setIsFormComplete(isNCIIAnswered && isGroup1Answered && isGroup2Answered && isFullNameFilled);
  }, [hasTakenNCII, selectedGroup1, selectedGroup2, fullName]);

  const handleGroup1Change = (id) => setSelectedGroup1(id);
  const handleGroup2Change = (id) => setSelectedGroup2(id);

  // Handle Submit button click
  const handleSubmit = () => {
    if (isFormComplete) {
      navigate('/realtime'); // Navigate to /realtime
    }
  };

  // Handle Okay button click in modal
  const handleOkayClick = () => {
    if (agreeToTerms) {
      setIsModalOpen(false); // Close the modal
    } else {
      setShowNotif(true); // Show notification if the user hasn't agreed to the terms
    }
  };

  // Handle Cancel button click
  const handleCancel = () => {
    navigate('/'); // Navigate to the home page or any other route
  };

  // Hide notification after 3 seconds
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
          <img
            src="loloraf.png"
            className="rounded-circle"
            alt="Avatar"
            style={{ width: 'auto', height: '230px', objectFit: 'cover' }}
          />
          <div className="ms-3">
            <p className="mb-1 ml-5 font-weight-500" id="FullName">John Manuel Cuerdo</p>
            <p className="mb-0 ml-5 font-weight-400">
              johnmanuelcuerdo@gmail.com
              <a
                href="#verify"
                className="verify-link ms-2 ml-2"
                onClick={() => alert('Verification link clicked')}
              >
                Verify your Gmail address
              </a>
            </p>
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="normal-textbox">FullName</label>
          <input
            type="text"
            id="normal-textbox"
            className="input-text"
            placeholder="Enter fullname here..."
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Have you taken any NCII Cookery course? */}
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

        {/* First Group of Checkboxes (1-3) */}
        <div className="d-flex flex-column align-items-start mt-3">
          <h4 className="mt-3">Do you have any experience in cooking before?</h4>

          <div className="form-check">
            <input
              type="checkbox"
              id="customCheckbox1"
              className="checkbox"
              checked={selectedGroup1 === '1'}
              onChange={() => handleGroup1Change('1')}
            />
            <label htmlFor="customCheckbox1" className="checkbox-label">Do you have experience in cooking?</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox2"
              className="checkbox"
              checked={selectedGroup1 === '2'}
              onChange={() => handleGroup1Change('2')}
            />
            <label htmlFor="customCheckbox2" className="checkbox-label">I have a bit of experience in cooking</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox3"
              className="checkbox"
              checked={selectedGroup1 === '3'}
              onChange={() => handleGroup1Change('3')}
            />
            <label htmlFor="customCheckbox3" className="checkbox-label">I have no experience at all</label>
          </div>
        </div>

        {/* Second Group of Checkboxes (4-6) */}
        <div className="d-flex flex-column align-items-start mt-3">
          <h4 className="mt-3">What’s your motive in learning how to cook?</h4>

          <div className="form-check">
            <input
              type="checkbox"
              id="customCheckbox4"
              className="checkbox"
              checked={selectedGroup2 === '4'}
              onChange={() => handleGroup2Change('4')}
            />
            <label htmlFor="customCheckbox4" className="checkbox-label">School Purposes (BSHM Student, taking NCII, etc.)</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox5"
              className="checkbox"
              checked={selectedGroup2 === '5'}
              onChange={() => handleGroup2Change('5')}
            />
            <label htmlFor="customCheckbox5" className="checkbox-label">Home Cooking</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox6"
              className="checkbox"
              checked={selectedGroup2 === '6'}
              onChange={() => handleGroup2Change('6')}
            />
            <label htmlFor="customCheckbox6" className="checkbox-label">Others</label>
          </div>
        </div>

        {/* Buttons */}
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

      {/* Modal */}
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

            {/* Modal Checkbox */}
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

            {/* Modal Footer with Okay button */}
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

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2024 Your Website
      </footer>

      {/* Notification */}
      {showNotif && (
        <div className="notif-container show">
          <p>You need to check the box to proceed.</p>
        </div>
      )}
    </>
  );
};

export default ProfileForm;