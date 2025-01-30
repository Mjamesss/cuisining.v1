import "../../fw-cuisining.css";
import React, { useState } from 'react';  // Import useState

const ProfileForm = () => {
  // Declare state for checkbox with useState (initially unchecked)
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle the checkbox state (checked/unchecked)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);  // Toggle the checked state
  };

  return (
    <>
      {/* Main Container */}
      <div className="container d-flex flex-column align-items-start">
        {/* Title Section */}
        <h1 className="align-self-start mt-5 font-weight-900">Cuisining</h1>
        <h3 className="align-self-start mt-3 ml-3 font-weight-600">Customize Profile</h3>
        
        {/* Avatar and User Info */}
        <div className="d-flex align-items-center">
          <img 
            src="loloraf.png" 
            className="rounded-circle" 
            alt="Avatar" 
            style={{ width: 'auto', height: '230px', objectFit: 'cover' }}
          />
          <div className="ms-3">
            <p className="mb-1 ml-5 font-weight-500">John Manuel Cuerdo</p>
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

        {/* Full Name Input */}
        <div className="mt-3">
          <label htmlFor="normal-textbox">FullName</label>
          <input 
            type="text" 
            id="normal-textbox" 
            className="input-text" 
            placeholder="Enter text here..." 
          />
        </div>

        {/* First Section of Checkbox Questions */}
        <div className="d-flex flex-column align-items-start mt-3">
          <h4 className="mt-3">Do you have any experience in cooking before?</h4>
          
          <div className="form-check">
            <input
              type="checkbox"
              id="customCheckbox"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="customCheckbox" className="checkbox-label">Do you have experience in cooking?</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox2"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="customCheckbox2" className="checkbox-label">I have a bit of experience in cooking</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox3"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="customCheckbox3" className="checkbox-label">I have no experience at all</label>
          </div>

        </div>

        {/* Second Section of Checkbox Questions */}
        <div className="d-flex flex-column align-items-start mt-3">
          <h4 className="mt-3">Do you have any experience in cooking before?</h4>
          
          <div className="form-check">
            <input
              type="checkbox"
              id="customCheckbox4"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="customCheckbox4" className="checkbox-label">Do you have experience in cooking?</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox5"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="customCheckbox5" className="checkbox-label">I have a bit of experience in cooking</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              id="customCheckbox6"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="customCheckbox6" className="checkbox-label">I have no experience at all</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttonContainer d-flex align-items-center mt-5 mb-5">
          <button className="cbtn cbtn-success ml-4">Submit</button>
          <button className="cbtn cbtn-outline-secondary ml-3">Cancel</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2024 Your Website
      </footer>
    </>
  );
};

export default ProfileForm;
