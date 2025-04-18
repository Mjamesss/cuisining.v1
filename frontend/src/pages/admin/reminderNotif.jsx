import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../components/sideNavAdmin'; // Import the SideNav component

const ReminderAdmin = () => {
  const [reminders, setReminders] = useState([]); // State to store all reminders
  const [newMessage, setNewMessage] = useState('');
  const [messageType, setMessageType] = useState('update');
  const [messageLink, setMessageLink] = useState('');
  const [recipientType, setRecipientType] = useState('all'); // 'all' or 'custom'
  const [users, setUsers] = useState([]);
  const [searchUserId, setSearchUserId] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Modal state
  const [validationMessage, setValidationMessage] = useState(''); // Validation message state
  const [searchQuery, setSearchQuery] = useState(''); // State for search query (message or cuisiningId)
  const [searchDate, setSearchDate] = useState(''); // State for date search

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of reminders per page

  // Fetch reminders from the backend when the component mounts
  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_LINK || 'http://localhost:5000'}/api/notif/notifications`
        );
        if (response.status === 200) {
          console.log('Fetched reminders:', response.data); // Log the response
          setReminders(response.data); // Update the reminders state with the fetched data
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

      // Send the POST request to the backend to add the reminder
      const response = await axios.post('http://localhost:5000/api/notif/notifications', payload);
      if (response.status === 201) {
        // Add the new reminder to the local state
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
        setReminders([reminder, ...reminders]); // Add new reminder to the top of the list

        // Reset the form fields
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

    // Check if the user already exists in the list
    if (users.includes(searchUserId)) {
      setValidationMessage("User already added.");
      return;
    }

    try {
      // Validate the cuisiningId using the /check-user endpoint
      const response = await axios.post('http://localhost:5000/api/notif/check-user', {
        cuisiningId: searchUserId,
      });

      if (response.status === 200) {
        // If the user is valid, add them to the list
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
    switch (type) {
      case 'update':
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841082/refresh_c3zxpa.png"
            alt="Update"//
            style={{ width: '20px', height: '20px' }}
          />
        );
      case 'new'://
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841121/new_tamwbo.png"
            alt="New"
            style={{ width: '20px', height: '20px' }}
          />
        );
      case 'reminder'://
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741981835/ringing_ieuuli.png"
            alt="Reminder"
            style={{ width: '20px', height: '20px' }}
          />
        );
        case 'warning'://
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841354/warning_r5usud.png"
            alt="Reminder"
            style={{ width: '20px', height: '20px' }}
          />
        );
      default:
        return (
          <img
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741841082/refresh_c3zxpa.png"
            alt="Default"
            style={{ width: '20px', height: '20px' }}
          />
        );
    }
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
        {/* Side Navigation */}
        <SideNav />

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Reminder Admin</h1>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by message or cuisiningId"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="date"
                  className="form-control"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Reminder Input Section */}
          <div className="mb-4 p-3 border rounded bg-light">
            <h4>Add New Reminder</h4>
            <textarea
              className="form-control mb-3"
              placeholder="Enter your reminder message (up to 60 characters)"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              maxLength={60}
              rows={3}
            />
            <select
              className="form-control mb-3"
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
            >
              <option value="update">Update</option>
              <option value="new">New</option>
              <option value="reminder">Reminder</option>
              <option value="warning">Warning</option>
            </select>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Optional: Add a link"
              value={messageLink}
              onChange={(e) => setMessageLink(e.target.value)}
            />
            {/* Recipient Type: All Users or Custom */}
            <div className="mb-3">
              <h5>Choose Recipients</h5>
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
                  Custom
                </label>
              </div>
            </div>
            {/* Add User Section (Only for Custom) */}
            {recipientType === 'custom' && (
              <div className="mb-3">
                <h5>Add Users by Cuisining ID</h5>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Cuisining ID (numbers only)"
                    value={searchUserId}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only integers
                      if (/^\d*$/.test(value)) {
                        setSearchUserId(value);
                      }
                    }}
                  />
                  <button className="cbtn cbtn-outline-secondary" onClick={handleAddUser}>
                    Add User
                  </button>
                </div>
                {/* Validation Message */}
                {validationMessage && (
                  <div className="text-danger mt-2">
                    {validationMessage}
                  </div>
                )}
                <div className="d-flex flex-wrap gap-2">
                  {users.map((user, index) => (
                    <span key={index} className="badge bg-secondary d-flex align-items-center">
                      {user}
                      <button
                        className="cbtn-close cbtn-close-white ms-2"
                        onClick={() => setUsers(users.filter((u) => u !== user))}
                      />
                    </span>
                  ))}
                </div>
              </div>
            )}
            <button className="cbtn cbtn-primary" onClick={() => setShowConfirmationModal(true)}>
              Add Reminder
            </button>
          </div>

          {/* Reminder List Section */}
          <div className="mt-4">
            <h4>Reminders</h4>
            <ul className="list-group">
              {currentReminders.map((reminder) => (
                <li key={reminder.id} className="list-group-item">
                  <div className="d-flex align-items-center">
                    <span className="me-2">{getIconForType(reminder.type)}</span>
                    <span className="flex-grow-1">{reminder.message}</span>
                    {reminder.link && (
                      <a href={reminder.link} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                        ➔
                      </a>
                    )}
                  </div>
                  <small className="text-muted">
                    Sent to: {reminder.recipients} | Sent on: {reminder.date} at {reminder.time}
                  </small>
                </li>
              ))}
            </ul>

            {/* Pagination Controls */}
            <nav className="mt-3">
              <ul className="pagination">
                {Array.from({ length: Math.ceil(filteredReminders.length / itemsPerPage) }, (_, i) => (
                  <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => paginate(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </main>

        {/* Confirmation Modal */}
        {showConfirmationModal && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Reminder</h5>
                  <button
                    type="button"
                    className="cbtn-close"
                    onClick={() => setShowConfirmationModal(false)}
                  />
                </div>
                <div className="modal-body">
                  <p>
                    <strong>Message:</strong> {newMessage}
                  </p>
                  <p>
                    <strong>Type:</strong>{" "}
                    {(() => {
                      // Debugging: Log the raw value of messageType
                      console.log("Raw messageType:", messageType);
                      const formattedMessageType = String(messageType).trim();
                      console.log("Formatted messageType:", formattedMessageType);
                      return formattedMessageType.charAt(0).toUpperCase() + formattedMessageType.slice(1);
                    })()}
                  </p>
                  <p>
                    <strong>Recipients:</strong>{' '}
                    {recipientType === 'all' ? 'All Users' : users.join(', ')}
                  </p>
                  {messageLink && (
                    <p>
                      <strong>Link:</strong> {messageLink}
                    </p>
                  )}
                  <p>Are you sure you want to send this reminder?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="cbtn cbtn-secondary"
                    onClick={() => setShowConfirmationModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="button" className="cbtn cbtn-primary" onClick={handleAddReminder}>
                    Confirm
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