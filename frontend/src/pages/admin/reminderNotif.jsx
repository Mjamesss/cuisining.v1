import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../components/sideNavAdmin';
import { FiSend, FiSearch, FiCalendar, FiUserPlus, FiX, FiAlertCircle, FiBell, FiRefreshCw, FiAlertTriangle, FiLink } from 'react-icons/fi';

const ReminderAdmin = () => {
  const [reminders, setReminders] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messageType, setMessageType] = useState('update');
  const [messageLink, setMessageLink] = useState('');
  const [recipientType, setRecipientType] = useState('all');
  const [users, setUsers] = useState([]);
  const [searchUserId, setSearchUserId] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch reminders from the backend when the component mounts
  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const backendURL = process.env.REACT_APP_BACKEND_LINK || 'http://localhost:5000';
    
        const response = await fetch(`${backendURL}/api/notif/notifications`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched reminders:', data);
          setReminders(data);
        } else {
          throw new Error(`Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching reminders:', error);
        setValidationMessage("Failed to fetch reminders. Please try again.");
      }
    };    
    fetchReminders();
  }, []);

  // Function to handle adding a new reminder
  const handleAddReminder = async () => {                                        
    if (newMessage.length > 60) {
      setValidationMessage("Message should be up to 60 characters.");
      return;
    }

    try {
      const payload = {
        message: newMessage,
        type: messageType,
        link: messageLink,
        recipientType: recipientType,
        cuisiningIds: recipientType === 'custom' ? users : undefined,
      };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/notif/notifications`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      

      
      if (response.status === 201) {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        const reminder = {
          id: Date.now(),
          message: newMessage,
          type: messageType,
          link: messageLink,
          recipients: recipientType === 'all' ? 'All Users' : users.join(', '),
          date: date,
          time: time,
        };
        setReminders([reminder, ...reminders]);

        setNewMessage('');
        setMessageLink('');
        setRecipientType('all');
        setUsers([]);
        setShowConfirmationModal(false);
      }
    } catch (error) {
      console.error('Error creating notification:', error);
      setValidationMessage("Failed to create notification. Please try again.");
    }
  };

  // Function to validate and add a user by cuisiningId
  const handleAddUser = async () => {
    if (searchUserId.trim() === '') {
      setValidationMessage("Please enter a valid Cuisining ID.");
      return;
    }

    if (users.includes(searchUserId)) {
      setValidationMessage("User already added.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/notif/check-user`,
        { cuisiningId: searchUserId }
      );      

      if (response.status === 200) {
        setUsers([...users, searchUserId]);
        setSearchUserId('');
        setValidationMessage("User added successfully.");
      }
    } catch (error) {
      console.error('Error validating user:', error);
      setValidationMessage("Invalid Cuisining ID. Please enter a valid ID.");
    }
  };

  // Function to get the icon based on the reminder type
  const getIconForType = (type) => {
    const iconMap = {
      update: <FiRefreshCw className="text-primary" />,
      new: <FiBell className="text-success" />,
      reminder: <FiAlertCircle className="text-warning" />,
      warning: <FiAlertTriangle className="text-danger" />
    };
    return iconMap[type] || <FiRefreshCw className="text-primary" />;
  };

  // Filter reminders based on search query and date
  const filteredReminders = reminders.filter((reminder) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearchQuery =
      reminder.message.toLowerCase().includes(searchLower) ||
      (reminder.recipients && reminder.recipients.toLowerCase().includes(searchLower));

    const matchesDate = searchDate
      ? reminder.date === new Date(searchDate).toLocaleDateString()
      : true;

    return matchesSearchQuery && matchesDate;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReminders = Array.isArray(filteredReminders)
    ? filteredReminders.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      <div className="row">
        <SideNav />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h3 fw-bold text-dark">Notification Center</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <span className="badge bg-light text-dark">
                {filteredReminders.length} Total Notifications
              </span>
            </div>
          </div>

          {/* Search Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FiSearch className="text-muted" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Search messages or users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FiCalendar className="text-muted" />
                    </span>
                    <input
                      type="date"
                      className="form-control border-start-0"
                      value={searchDate}
                      onChange={(e) => setSearchDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Create Notification Card */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="mb-0 fw-semibold">Create New Notification</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Message (max 60 chars)</label>
                <textarea
                  className="form-control"
                  placeholder="What would you like to notify users about?"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  maxLength={60}
                  rows={2}
                  style={{ resize: 'none' }}
                />
                <small className="text-muted float-end">
                  {newMessage.length}/60
                </small>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">Notification Type</label>
                  <select
                    className="form-select"
                    value={messageType}
                    onChange={(e) => setMessageType(e.target.value)}
                  >
                    <option value="update">Update</option>
                    <option value="new">New Feature</option>
                    <option value="reminder">Reminder</option>
                    <option value="warning">Warning</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Link (optional)</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FiLink />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://example.com"
                      value={messageLink}
                      onChange={(e) => setMessageLink(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Recipients</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="allUsers"
                      name="recipientType"
                      value="all"
                      checked={recipientType === 'all'}
                      onChange={(e) => setRecipientType(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="allUsers">
                      All Users
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="custom"
                      name="recipientType"
                      value="custom"
                      checked={recipientType === 'custom'}
                      onChange={(e) => setRecipientType(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="custom">
                      Specific Users
                    </label>
                  </div>
                </div>
              </div>

              {recipientType === 'custom' && (
                <div className="mb-3">
                  <label className="form-label">Add Users by ID</label>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter user ID"
                      value={searchUserId}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setSearchUserId(value);
                        }
                      }}
                    />
                    <button 
                      className="cbtn cbtn-outline-primary" 
                      onClick={handleAddUser}
                      type="button"
                    >
                      <FiUserPlus className="me-1" /> Add
                    </button>
                  </div>
                  {validationMessage && (
                    <div className={`alert ${validationMessage.includes('success') ? 'alert-success' : 'alert-danger'} py-2`}>
                      {validationMessage}
                    </div>
                  )}
                  {users.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {users.map((user, index) => (
                        <span key={index} className="badge bg-primary bg-opacity-10 text-primary d-flex align-items-center">
                          {user}
                          <button
                            className="cbtn-close cbtn-close-white ms-2"
                            onClick={() => setUsers(users.filter((u) => u !== user))}
                            style={{ fontSize: '0.5rem' }}
                          />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="d-flex justify-content-end mt-4">
                <button 
                  className="cbtn cbtn-primary px-4"
                  onClick={() => setShowConfirmationModal(true)}
                  disabled={!newMessage.trim()}
                >
                  <FiSend className="me-2" /> Send Notification
                </button>
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="card shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-semibold">Recent Notifications</h5>
              <span className="badge bg-primary rounded-pill">
                {currentReminders.length} shown
              </span>
            </div>
            <div className="card-body p-0">
              {currentReminders.length === 0 ? (
                <div className="text-center py-5">
                  <div className="text-muted mb-3">No notifications found</div>
                  {searchQuery || searchDate ? (
                    <button 
                      className="cbtn cbtn-sm cbtn-outline-secondary"
                      onClick={() => {
                        setSearchQuery('');
                        setSearchDate('');
                      }}
                    >
                      Clear search
                    </button>
                  ) : null}
                </div>
              ) : (
                <ul className="list-group list-group-flush">
                  {currentReminders.map((reminder) => (
                    <li key={reminder.id} className="list-group-item border-0 py-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3 mt-1">
                          {getIconForType(reminder.type)}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1 fw-semibold">{reminder.message}</h6>
                            {reminder.link && (
                              <a 
                                href={reminder.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cbtn cbtn-sm btn-link"
                              >
                                View Link
                              </a>
                            )}
                          </div>
                          <div className="d-flex flex-wrap gap-3 text-muted small">
                            <span>
                              <strong>Sent to:</strong> {reminder.recipients}
                            </span>
                            <span>
                              <strong>Date:</strong> {reminder.date} at {reminder.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Pagination */}
            {filteredReminders.length > itemsPerPage && (
              <div className="card-footer bg-white">
                <nav aria-label="Notifications navigation">
                  <ul className="pagination pagination-sm justify-content-center mb-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => paginate(currentPage - 1)}
                      >
                        Previous
                      </button>
                    </li>
                    {Array.from({ length: Math.ceil(filteredReminders.length / itemsPerPage) }, (_, i) => (
                      <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => paginate(i + 1)}>
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === Math.ceil(filteredReminders.length / itemsPerPage) ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => paginate(currentPage + 1)}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </main>

        {/* Confirmation Modal */}
        {showConfirmationModal && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 shadow">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-semibold">Confirm Notification</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowConfirmationModal(false)}
                  />
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label text-muted small">MESSAGE</label>
                    <div className="p-3 bg-light rounded">
                      {newMessage}
                    </div>
                  </div>
                  
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small">TYPE</label>
                      <div className="p-3 bg-light rounded">
                        {messageType.charAt(0).toUpperCase() + messageType.slice(1)}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small">RECIPIENTS</label>
                      <div className="p-3 bg-light rounded">
                        {recipientType === 'all' ? 'All Users' : users.join(', ')}
                      </div>
                    </div>
                  </div>
                  
                  {messageLink && (
                    <div className="mb-3">
                      <label className="form-label text-muted small">LINK</label>
                      <div className="p-3 bg-light rounded text-truncate">
                        {messageLink}
                      </div>
                    </div>
                  )}
                  
                  <p className="mt-4">Are you sure you want to send this notification?</p>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="cbtn cbtn-outline-secondary"
                    onClick={() => setShowConfirmationModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    className="cbtn cbtn-primary" 
                    onClick={handleAddReminder}
                  >
                    <FiSend className="me-2" /> Confirm Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReminderAdmin;