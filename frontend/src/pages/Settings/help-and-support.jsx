import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import SideNavSettings from './side-nav-settings';
import axios from 'axios';
import '../login/sidenotif.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const HelpSupportPage = () => {
  const navigate = useNavigate();
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);
  const [reportMessage, setReportMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [cooldownStatus, setCooldownStatus] = useState({
    report: { canSubmit: true, nextAvailable: null, firstTime: true },
    feedback: { canSubmit: true, nextAvailable: null, firstTime: true }
  });

  // Get token from localStorage
  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  // Fetch cooldown status on component mount
  useEffect(() => {
    const fetchCooldownStatus = async () => {
      const token = getToken();
      if (!token) return;

      try {
        const response = await axios.get(
          'http://localhost:5000/api/cooldown-status',
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          }
        );

        if (response.data.success) {
          setCooldownStatus(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching cooldown status:', error);
      }
    };

    fetchCooldownStatus();
  }, []);

  // Show notification and auto-hide after 3 seconds
  const displayNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleFeedbackChange = (e) => {
    if (e.target.value.length <= 60) {
      setFeedbackText(e.target.value);
    }
  };

  const handleReportChange = (e) => {
    if (e.target.value.length <= 60) {
      setReportMessage(e.target.value);
    }
  };

  const submitReport = async () => {
    if (!reportMessage.trim()) {
      setSubmitStatus({ success: false, message: 'Report message is required.' });
      displayNotification('Report message is required.');
      return;
    }

    const token = getToken();
    if (!token) {
      setSubmitStatus({ success: false, message: 'You need to be logged in to submit a report.' });
      displayNotification('You need to be logged in to submit a report.');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/report',
        { reportMessage: reportMessage.trim() },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setSubmitStatus({ success: true, message: 'Report submitted successfully!' });
      displayNotification('Report submitted successfully!');
      
      // Update cooldown status based on the response
      setCooldownStatus(prev => ({
        ...prev,
        report: {
          canSubmit: false,
          nextAvailable: new Date(response.data.data.nextAvailable),
          firstTime: false
        }
      }));
      
      setTimeout(() => {
        setShowModalA(false);
        setSubmitStatus({ success: null, message: '' });
        setReportMessage('');
      }, 1500);
    } catch (error) {
      console.error('Error submitting report:', error);
      let errorMessage = 'Failed to submit report. Please try again.';
      
      if (error.response) {
        if (error.response.status === 403) {
          errorMessage = 'Please complete your profile before submitting a report.';
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.status === 429) {
          errorMessage = error.response.data.message;
          setCooldownStatus(prev => ({
            ...prev,
            report: {
              canSubmit: false,
              nextAvailable: new Date(error.response.data.nextAvailable),
              firstTime: false
            }
          }));
        }
      }
      
      setSubmitStatus({ success: false, message: errorMessage });
      displayNotification(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitRating = async () => {
    if (rating < 1 || rating > 5) {
      setSubmitStatus({ success: false, message: 'Please select a rating between 1 and 5.' });
      displayNotification('Please select a rating between 1 and 5.');
      return;
    }

    const token = getToken();
    if (!token) {
      setSubmitStatus({ success: false, message: 'You need to be logged in to submit feedback.' });
      displayNotification('You need to be logged in to submit feedback.');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/rate',
        { 
          rating, 
          feedback: feedbackText.trim() || '' 
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setSubmitStatus({ success: true, message: 'Thank you for your feedback!' });
      displayNotification('Thank you for your feedback!');
      
      // Update cooldown status based on the response
      setCooldownStatus(prev => ({
        ...prev,
        feedback: {
          canSubmit: false,
          nextAvailable: new Date(response.data.data.nextAvailable),
          firstTime: false
        }
      }));
      
      setTimeout(() => {
        setShowModalB(false);
        setSubmitStatus({ success: null, message: '' });
        setRating(0);
        setFeedbackText('');
      }, 1500);
    } catch (error) {
      console.error('Error submitting rating:', error);
      let errorMessage = error.response?.data?.message || 'Failed to submit feedback. Please try again.';
      
      if (error.response?.status === 429) {
        setCooldownStatus(prev => ({
          ...prev,
          feedback: {
            canSubmit: false,
            nextAvailable: new Date(error.response.data.nextAvailable),
            firstTime: false
          }
        }));
      }
      
      setSubmitStatus({ success: false, message: errorMessage });
      displayNotification(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenReportModal = () => {
    if (!cooldownStatus.report.canSubmit) {
      const nextDate = new Date(cooldownStatus.report.nextAvailable).toLocaleDateString();
      displayNotification(`You can submit another report on ${nextDate}`);
      return;
    }
    setShowModalA(true);
  };

  const handleOpenFeedbackModal = () => {
    if (!cooldownStatus.feedback.canSubmit) {
      const nextDate = new Date(cooldownStatus.feedback.nextAvailable).toLocaleDateString();
      displayNotification(`You can submit another feedback on ${nextDate}`);
      return;
    }
    setShowModalB(true);
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Notification Component
  const Notification = () => {
    return (
      <div className={`notif-container ${showNotification ? "show" : ""}`}>
        {notificationMessage}
      </div>
    );
  };

  // Cooldown Tooltip Component
  const CooldownTooltip = ({ children, type }) => {
    const nextAvailable = cooldownStatus[type].nextAvailable;
    const message = `Available on ${formatDate(nextAvailable)}`;
    
    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id={`${type}-tooltip`}>{message}</Tooltip>}
      >
        {children}
      </OverlayTrigger>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f1f1f1' }}>
      <Notification />
      
      <div className="container-fluid">
        <div className="row">
          <SideNavSettings />
          
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
                      {!cooldownStatus.report.canSubmit ? (
                        <CooldownTooltip type="report">
                          <button
                            className="btn btn-outline-primary"
                            disabled
                            style={{ cursor: 'not-allowed' }}
                          >
                            Report an Issue
                          </button>
                        </CooldownTooltip>
                      ) : (
                        <button
                          className="btn btn-outline-primary"
                          onClick={handleOpenReportModal}
                          disabled={isSubmitting}
                        >
                          {cooldownStatus.report.firstTime ? "Submit Your First Report" : "Report an Issue"}
                        </button>
                      )}
                      {!cooldownStatus.report.canSubmit && (
                        <p className="text-muted mt-2 small">
                          Next submission available: {formatDate(cooldownStatus.report.nextAvailable)}
                        </p>
                      )}
                      {cooldownStatus.report.firstTime && cooldownStatus.report.canSubmit && (
                        <p className="text-success mt-2 small">
                          <i className="fas fa-info-circle"></i> First-time reports can be submitted immediately!
                        </p>
                      )}
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
                      {!cooldownStatus.feedback.canSubmit ? (
                        <CooldownTooltip type="feedback">
                          <button
                            className="btn btn-outline-primary"
                            disabled
                            style={{ cursor: 'not-allowed' }}
                          >
                            Provide Feedback
                          </button>
                        </CooldownTooltip>
                      ) : (
                        <button
                          className="btn btn-outline-primary"
                          onClick={handleOpenFeedbackModal}
                          disabled={isSubmitting}
                        >
                          {cooldownStatus.feedback.firstTime ? "Submit Your First Feedback" : "Provide Feedback"}
                        </button>
                      )}
                      {!cooldownStatus.feedback.canSubmit && (
                        <p className="text-muted mt-2 small">
                          Next submission available: {formatDate(cooldownStatus.feedback.nextAvailable)}
                        </p>
                      )}
                      {cooldownStatus.feedback.firstTime && cooldownStatus.feedback.canSubmit && (
                        <p className="text-success mt-2 small">
                          <i className="fas fa-info-circle"></i> First-time feedback can be submitted immediately!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Report Issue Modal */}
      {showModalA && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="d-flex flex-column align-items-center w-100">
                  <img
                    src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745133314/customer-satisfaction_1_a2woev.png"
                    alt="Report Issue Icon"
                    style={{ width: '70px', height: '70px', marginBottom: '10px' }}
                  />
                  <h5 className="modal-title text-center">
                    {cooldownStatus.report.firstTime ? "Submit Your First Report" : "Something Went Wrong"}
                  </h5>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => {
                    setShowModalA(false);
                    setReportMessage('');
                    setSubmitStatus({ success: null, message: '' });
                  }}
                  disabled={isSubmitting}
                />
              </div>
              <div className="modal-body">
                {cooldownStatus.report.firstTime && (
                  <div className="alert alert-info mb-3" role="alert">
                    <i className="fas fa-info-circle me-2"></i> This is your first report. After submission, you'll need to wait 3 days before submitting another one.
                  </div>
                )}
                <textarea
                  className="form-control mb-3"
                  placeholder="Describe the issue (up to 60 characters)"
                  value={reportMessage}
                  onChange={handleReportChange}
                  maxLength={60}
                  rows={3}
                  disabled={isSubmitting}
                />
                <small className="text-muted">{reportMessage.length}/60 characters</small>
                {submitStatus.message && (
                  <div className={`mt-3 alert ${submitStatus.success ? 'alert-success' : 'alert-danger'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => {
                    setShowModalA(false);
                    setReportMessage('');
                    setSubmitStatus({ success: null, message: '' });
                  }}
                  disabled={isSubmitting}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={submitReport}
                  disabled={isSubmitting || !reportMessage.trim()}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Submitting...
                    </>
                  ) : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showModalB && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="d-flex flex-column align-items-center w-100">
                  <img
                    src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745133313/sadness_1_v677al.png"
                    alt="Feedback Icon"
                    style={{ width: '70px', height: '70px', marginBottom: '10px' }}
                  />
                  <h5 className="modal-title text-center">
                    {cooldownStatus.feedback.firstTime ? "Submit Your First Feedback" : "Help Us Improve"}
                  </h5>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => {
                    setShowModalB(false);
                    setRating(0);
                    setFeedbackText('');
                    setSubmitStatus({ success: null, message: '' });
                  }}
                  disabled={isSubmitting}
                />
              </div>
              <div className="modal-body">
                {cooldownStatus.feedback.firstTime && (
                  <div className="alert alert-info mb-3" role="alert">
                    <i className="fas fa-info-circle me-2"></i> This is your first feedback. After submission, you'll need to wait 3 days before submitting another one.
                  </div>
                )}
                <div className="mb-4">
                  <label className="form-label d-block text-center">Rate your experience:</label>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`btn btn-link fs-1 ${star <= rating ? 'text-warning' : 'text-muted'}`}
                        onClick={() => !isSubmitting && setRating(star)}
                        disabled={isSubmitting}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Your feedback (optional, up to 60 characters):</label>
                  <textarea
                    className="form-control"
                    placeholder="Share your thoughts..."
                    value={feedbackText}
                    onChange={handleFeedbackChange}
                    maxLength={60}
                    rows={3}
                    disabled={isSubmitting}
                  />
                  <small className="text-muted">{feedbackText.length}/60 characters</small>
                </div>
                {submitStatus.message && (
                  <div className={`mt-3 alert ${submitStatus.success ? 'alert-success' : 'alert-danger'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => {
                    setShowModalB(false);
                    setRating(0);
                    setFeedbackText('');
                    setSubmitStatus({ success: null, message: '' });
                  }}
                  disabled={isSubmitting}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={submitRating}
                  disabled={isSubmitting || rating === 0}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Submitting...
                    </>
                  ) : 'Submit'}
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