import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavSettings from './side-nav-settings';
import { useNavigate } from 'react-router-dom';

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
  const [passwordErrors, setPasswordErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          navigate('/login');
          return;
        }

        const profileResponse = await axios.get(
          "http://localhost:5000/api/settings/settings-profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        ).catch(() =>
          axios.get("https://cuisining-v1.onrender.com/api/settings/settings-profile", {
            headers: { Authorization: `Bearer ${token}` },
          })
        );
        
        

        const { fullName, email } = profileResponse.data;

        setFormData({
          name: fullName,
          email: email,
        });

      } catch (error) {
        console.error("Error fetching profile data:", error.message);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('authToken');
          navigate('/login');
        } else {
          setError(error.response?.data?.message || error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [navigate]);

  const validatePassword = () => {
    const errors = {};
    let isValid = true;

    if (!passwordData.currentPassword) {
      errors.currentPassword = 'Current password is required';
      isValid = false;
    }

    if (!passwordData.newPassword) {
      errors.newPassword = 'New password is required';
      isValid = false;
    } else if (passwordData.newPassword.length < 6) {
      errors.newPassword = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setPasswordErrors(errors);
    return isValid;
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    if (!validatePassword()) return;

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/settings/change-password",
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ).catch(() =>
        axios.post("https://cuisining-v1.onrender.com/api/settings/change-password", {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        })
      );
      
      

      setSuccessMessage(response.data.message || 'Password changed successfully!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });

    } catch (error) {
      console.error("Error changing password:", error);
      if (error.response) {
        if (error.response.status === 401) {
          localStorage.removeItem('authToken');
          navigate('/login');
        } else {
          setError(error.response.data.message || 'Failed to change password');
        }
      } else {
        setError('Network error. Please try again.');
      }
    }
  };

  const renderPasswordForm = () => (
    <div className="card p-4 shadow-sm">
      <h4 className="fw-bold mb-3">Change Password</h4>
      <p className="text-muted mb-4">Manage your password and security settings.</p>

      {successMessage && (
        <div className="alert alert-success mb-3">{successMessage}</div>
      )}
      {error && (
        <div className="alert alert-danger mb-3">{error}</div>
      )}

      <form onSubmit={handlePasswordChange}>
        {[
          { field: 'currentPassword', label: 'Current password' },
          { field: 'newPassword', label: 'New password' },
          { field: 'confirmPassword', label: 'Confirm new password' }
        ].map((item, index) => (
          <div className="mb-3" key={index}>
            <div className="input-wrapper">
              <input
                type="password"
                className={`form-control ${passwordData[item.field] ? 'filled' : ''} ${passwordErrors[item.field] ? 'is-invalid' : ''}`}
                value={passwordData[item.field]}
                onChange={(e) => {
                  setPasswordData({ ...passwordData, [item.field]: e.target.value });
                  // Clear error when typing
                  if (passwordErrors[item.field]) {
                    setPasswordErrors({ ...passwordErrors, [item.field]: '' });
                  }
                }}
                required
              />
              <label>{item.label}</label>
              {passwordErrors[item.field] && (
                <div className="invalid-feedback">
                  {passwordErrors[item.field]}
                </div>
              )}
            </div>
          </div>
        ))}
        <button type="submit" className="cbtn cbtn-primary mt-3" style={{color:"#363100"}}>
          Update Password
        </button>
      </form>
    </div>
  );

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#f1f1f1' }}>
        <div className="container-fluid">
          <div className="row">
            <SideNavSettings activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="col-md-9 ms-sm-auto col-lg-10 p-5">
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f1f1f1' }}>
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

          .input-wrapper input:focus {
            border-color: #948F5C;
            box-shadow: 0 0 0 0.25rem rgba(148, 143, 92, 0.25);
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
            color: #948F5C;
            background: white;
            padding: 0 5px;
          }

          .cbtn-primary {
            background-color: #948F5C;
            border-color: #948F5C;
            color: white;
          }

          .cbtn-primary:hover {
            background-color: #7a7550;
            border-color: #7a7550;
          }
        `}
      </style>

      <div className="container-fluid">
        <div className="row">
          <SideNavSettings activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="col-md-9 ms-sm-auto col-lg-10 p-5">
            {renderPasswordForm()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;