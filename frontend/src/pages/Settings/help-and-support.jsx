import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import SideNavSettings from './side-nav-settings';

const HelpSupportPage = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showModalA, setShowModalA] = useState(false); // State for modal A
  const [showModalB, setShowModalB] = useState(false); // State for modal B
  const [feedbackText, setFeedbackText] = useState(''); // State for feedback text in modal B
  const [rating, setRating] = useState(0); // State for star rating in modal B

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Function to handle text input change for modal B
  const handleFeedbackChange = (e) => {
    if (e.target.value.length <= 60) {
      setFeedbackText(e.target.value);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f1f1f1' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Side Navigation - Using your SideNavSettings component */}
          <SideNavSettings />
          
          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 p-5">
            <div className="card p-4 shadow-sm">
              <h2 className="fw-bold mb-4">Help and Support</h2>
              <p className="text-muted mb-4">
                Welcome to Help and Support! Get updates on your reports, respond to support messages from our team, 
                and stay informed about your account.
              </p>

              <div className="row mt-4">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 p-4">
                    <div className="card-body">
                      <h5 className="card-title">A. Something went wrong</h5>
                      <p className="card-text">
                        Let us know if you encounter any issues with a feature. Our team will investigate and get back to you.
                      </p>
                      <button
                        className="cbtn cbtn-outline-primary"
                        onClick={() => setShowModalA(true)}
                      >
                        Report an Issue
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="card h-100 p-4">
                    <div className="card-body">
                      <h5 className="card-title">B. Help us improve Cuisining</h5>
                      <p className="card-text">
                        Rate your experience and share your suggestions with us. We value your feedback!
                      </p>
                      <button
                        className="cbtn cbtn-outline-primary"
                        onClick={() => setShowModalB(true)}
                      >
                        Provide Feedback
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modal A: Something went wrong */}
      {showModalA && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="d-flex flex-column align-items-center w-100">
                  {/* Icon for Modal A */}
                  <img
                    src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745133314/customer-satisfaction_1_a2woev.png" // Replace with your 2x2 icon URL
                    alt="Report Issue Icon"
                    style={{ width: '70px', height: '70px', marginBottom: '10px' }}
                  />
                  <h5 className="modal-title text-center">Something Went Wrong</h5>
                </div>
                <button type="button" className="btn-close" onClick={() => setShowModalA(false)}></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  placeholder="Describe the issue (up to 60 characters)"
                  maxLength={60}
                  rows={3}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModalA(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal B: Help us improve Cuisining */}
      {showModalB && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="d-flex flex-column align-items-center w-100">
                  {/* Icon for Modal B */}
                  <img
                    src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745133313/sadness_1_v677al.png" // Replace with your 2x2 icon URL
                    alt="Feedback Icon"
                    style={{ width: '70px', height: '70px', marginBottom: '10px' }}
                  />
                  <h5 className="modal-title text-center">Help Us Improve</h5>
                </div>
                <button type="button" className="btn-close" onClick={() => setShowModalB(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Rate your experience:</label>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`fs-3 ${star <= rating ? 'text-warning' : 'text-muted'}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setRating(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Your feedback (up to 60 characters):</label>
                  <textarea
                    className="form-control"
                    placeholder="Share your thoughts..."
                    value={feedbackText}
                    onChange={handleFeedbackChange}
                    maxLength={60}
                    rows={3}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModalB(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpSupportPage;