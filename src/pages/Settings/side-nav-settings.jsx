import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';

const SideNavSettings = () => {
  const location = useLocation();

  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-white shadow-sm rounded-3 p-3" style={{ minHeight: '100vh' }}>
      <h2 className="fw-bold mt-3 ml-3 pb-3">Settings</h2>
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
        <li className="nav-item mb-2 ">
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
      </ul>
    </nav>
  );
};

export default SideNavSettings;
