import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SideNavSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        // Get token from localStorage (consistent with your ProfileForm)
        const token = localStorage.getItem('authToken'); // Changed from 'token' to 'authToken'
        
        if (!token) {
          setError('No authentication token found');
          navigate('/login'); // Redirect to login if no token
          return;
        }

        const response = await axios.get('http://localhost:5000/api/settings/provider', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          validateStatus: (status) => status < 500 // Don't throw error for 4xx statuses
        });

        if (response.status === 401) {
          // Token is invalid or expired
          localStorage.removeItem('authToken');
          setError('Session expired. Please log in again.');
          navigate('/login');
          return;
        }

        if (response.status === 200) {
          setProvider(response.data.provider);
        } else {
          setError('Failed to fetch provider information');
        }
      } catch (error) {
        console.error('Error fetching provider:', error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('authToken');
          setError('Session expired. Please log in again.');
          navigate('/login');
        } else {
          setError('Failed to connect to server');
        }
      }
    };

    fetchProvider();
  }, [navigate]);

  // Hide password security for Google or other OAuth providers
  const showPasswordSecurity = provider !== 'Google';

  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-white shadow-sm rounded-3 p-3" style={{ minHeight: '100vh' }}>
      <h2 className="fw-bold mt-3 ml-3 pb-3">Settings</h2>
      
      {error && (
        <div className="alert alert-warning">
          {error}
        </div>
      )}

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link 
            to="/settings/personal-details" 
            className={`btn btn-light w-100 text-start rounded-0 position-relative p-font ${location.pathname === '/settings/personal-details' ? 'active-tab' : ''}`}
            style={{
              borderLeft: location.pathname === '/settings/personal-details' ? '4px solid #363100' : '4px solid transparent',
              transition: 'border-left 0.3s ease',
            }}
          >
            Personal Details
          </Link>
        </li>
        
        {showPasswordSecurity && (
          <li className="nav-item mb-2">
            <Link 
              to="/settings/passwordsecurity" 
              className={`btn btn-light w-100 text-start rounded-0 position-relative p-font ${location.pathname === '/settings/passwordsecurity' ? 'active-tab' : ''}`}
              style={{
                borderLeft: location.pathname === '/settings/passwordsecurity' ? '4px solid #363100' : '4px solid transparent',
                transition: 'border-left 0.3s ease'
              }}
            >
              Password & Security
            </Link>
          </li>
        )}
        
        <li className="nav-item mb-2">
          <Link 
            to="/settings/help-support" 
            className={`btn btn-light w-100 text-start rounded-0 position-relative p-font ${location.pathname === '/settings/help-support' ? 'active-tab' : ''}`}
            style={{
              borderLeft: location.pathname === '/settings/help-support' ? '4px solid #363100' : '4px solid transparent',
              transition: 'border-left 0.3s ease'
            }}
          >
            Help & Support
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link 
            to="/settings/subscription" 
            className={`btn btn-light w-100 text-start rounded-0 position-relative p-font ${location.pathname === '/settings/subscription' ? 'active-tab' : ''}`}
            style={{
              borderLeft: location.pathname === '/settings/subscription' ? '4px solid #363100' : '4px solid transparent',
              transition: 'border-left 0.3s ease',
              fontWeight: "500",
            }}
          >
            Subscription
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavSettings;