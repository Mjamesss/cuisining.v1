import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../components/sideNavAdmin'; // Import the SideNav component

const ReminderAdmin = () => {
  const [reminders, setReminders] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messageType, setMessageType] = useState('update');
  const [messageLink, setMessageLink] = useState('');
  const [recipientType, setRecipientType] = useState('all'); // 'all' or 'custom'
  const [users, setUsers] = useState([]);
  const [searchUserId, setSearchUserId] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Modal state

  const handleAddReminder = () => {
    if (newMessage.length > 60) {
      alert('Message should be up to 60 characters.');
      return;
    }

    // Get the current date and time
    const now = new Date();
    const date = now.toLocaleDateString(); // Format: MM/DD/YYYY
    const time = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

    const reminder = {
      id: Date.now(),
      message: newMessage,
      type: messageType,
      link: messageLink,
      recipients: recipientType === 'all' ? 'All Users' : users.join(', '), // Send to all or specific users
      date: date, // Automatically captured date
      time: time, // Automatically captured time
    };

    setReminders([...reminders, reminder]);
    setNewMessage('');
    setMessageLink('');
    setRecipientType('all'); // Reset to "All Users" after adding
    setUsers([]); // Clear custom users
    setShowConfirmationModal(false); // Close the modal
  };

  const handleAddUser = () => {
    if (searchUserId.trim() === '') {
      alert('Please enter a valid Cuisining ID.');
      return;
    }

    if (users.includes(searchUserId)) {
      alert('User already added.');
      return;
    }

    setUsers([...users, searchUserId]);
    setSearchUserId('');
  };

  const handleSearchUserIdChange = (e) => {
    const value = e.target.value;
    // Allow only integers
    if (/^\d*$/.test(value)) {
      setSearchUserId(value);
    }
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'update':
        return <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741981835/ringing_ieuuli.png" alt="Update" style={{ width: '20px', height: '20px' }} />;
      case 'new':
        return <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741980548/new-icon.png" alt="New" style={{ width: '20px', height: '20px' }} />;
      case 'reminder':
        return <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741980548/reminder-icon.png" alt="Reminder" style={{ width: '20px', height: '20px' }} />;
      default:
        return <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741980548/default-icon.png" alt="Default" style={{ width: '20px', height: '20px' }} />;
    }
  };

  const handleConfirmReminder = () => {
    if (newMessage.trim() === '') {
      alert('Please enter a reminder message.');
      return;
    }
    setShowConfirmationModal(true); // Show the confirmation modal
  };

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
                    onChange={handleSearchUserIdChange}
                  />
                  <button className="cbtn cbtn-outline-secondary" onClick={handleAddUser}>
                    Add User
                  </button>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {users.map((user, index) => (
                    <span key={index} className="badge bg-secondary d-flex align-items-center">
                      {user}
                      <button
                        className="cbtn-close cbtn-close-white ms-2"
                        onClick={() => setUsers(users.filter(u => u !== user))}
                      />
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button className="cbtn cbtn-primary" onClick={handleConfirmReminder}>
              Add Reminder
            </button>
          </div>

          {/* Reminder List Section */}
          <div className="mt-4">
            <h4>Reminders</h4>
            <ul className="list-group">
              {reminders.map((reminder) => (
                <li key={reminder.id} className="list-group-item">
                  <div className="d-flex align-items-center">
                    <span className="me-2">{getIconForType(reminder.type)}</span>
                    <span className="flex-grow-1">{reminder.message}</span>
                    {reminder.link && (
                      <a href={reminder.link} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                        🔗
                      </a>
                    )}
                  </div>
                  <small className="text-muted">
                    Sent to: {reminder.recipients} | Sent on: {reminder.date} at {reminder.time}
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>

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
                <p><strong>Message:</strong> {newMessage}</p>
                <p><strong>Type:</strong> {messageType}</p>
                <p><strong>Recipients:</strong> {recipientType === 'all' ? 'All Users' : users.join(', ')}</p>
                {messageLink && <p><strong>Link:</strong> {messageLink}</p>}
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
                <button
                  type="button"
                  className="cbtn cbtn-primary"
                  onClick={handleAddReminder}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReminderAdmin;