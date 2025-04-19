import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavSettings from './side-nav-settings';

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No token found in localStorage.");

        const profileResponse = await axios.get("http://localhost:5000/api/settings/settings-profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const { fullName, email } = profileResponse.data;

        setFormData({
          name: fullName,
          email: email,
        });

      } catch (error) {
        console.error("Error fetching profile data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      await axios.post("http://localhost:5000/api/settings/change-password", {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Password changed successfully!");
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error("Error changing password:", error.message);
      alert("Failed to change password.");
    }
  };
  const renderContent = () => (
    <div className="card p-4 shadow-sm">
      <h4 className="fw-bold mb-3">Change Password</h4>
      <p className="text-muted mb-4">Manage your password and security settings.</p>

      <form onSubmit={handlePasswordChange}>
        {['currentPassword', 'newPassword', 'confirmPassword'].map((field, index) => (
          <div className="input-wrapper mb-3" key={index}>
            <input
              type="password"
              className={`form-control ${passwordData[field] ? 'filled' : ''}`}
              value={passwordData[field]}
              onChange={(e) => setPasswordData({ ...passwordData, [field]: e.target.value })}
              required
            />
            <label>{field === 'currentPassword' ? 'Current password' :
                    field === 'newPassword' ? 'New password' : 'Retype new password'}</label>
          </div>
        ))}
        <button type="submit" className="cbtn cbtn-primary mt-3 px-4">Update</button>
      </form>
    </div>
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f1f1f1' }}>
      {/* Internal CSS */}
      <style>
        {`
          .input-wrapper {
            position: relative;
          }

          .input-wrapper input {
            width: 100%;
            padding: 10px 10px 10px 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .input-wrapper label {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            color: #888;
            font-size: 16px;
            pointer-events: none;
            transition: 0.3s;
          }

          .input-wrapper input:focus + label,
          .input-wrapper input.filled + label {
            top: 5px;
            font-size: 12px;
            color: #948F5C; /* Label color when focused */
          }
        `}
      </style>

      <div className="container-fluid">
        <div className="row">
          <SideNavSettings activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="col-md-9 ms-sm-auto col-lg-10 p-5">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
