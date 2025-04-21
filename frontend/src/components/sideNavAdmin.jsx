import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav 
      className="col-md-3 col-lg-2 d-md-block sidebar collapse d-flex flex-column" 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#948F5C',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto'
      }}
    >
      {/* Header */}
      <div className="text-center mb-4 pt-3 sticky-top" style={{ backgroundColor: '#948F5C', zIndex: 1 }}>
        <h3 className="text-white">CUISINING</h3>
      </div>

      {/* Navigation Items */}
      <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              to="/dashboard"
              className={`nav-link text-white ${activeLink === '/dashboard' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/dashboard')}
              style={{ 
                backgroundColor: activeLink === '/dashboard' ? '#B3A369' : '', 
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
            >
              <img 
                src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741980548/dashboard_f1pvxr.png" 
                alt="Dashboard" 
                style={{ width: '20px', marginRight: '10px' }} 
              />
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/transactions"
              className={`nav-link text-white ${activeLink === '/transactions' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/transactions')}
              style={{ 
                backgroundColor: activeLink === '/transactions' ? '#B3A369' : '', 
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
            >
              <img 
                src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741980591/transfer_amz1q6.png" 
                alt="Transactions" 
                style={{ width: '20px', marginRight: '10px' }} 
              />
              Transactions
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/announcement"
              className={`nav-link text-white ${activeLink === '/announcement' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/announcement')}
              style={{ 
                backgroundColor: activeLink === '/announcement' ? '#B3A369' : '', 
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
            >
              <img 
                src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741981835/ringing_ieuuli.png" 
                alt="Announcement" 
                style={{ width: '20px', marginRight: '10px' }} 
              />
              Announcement
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/userAdmin"
              className={`nav-link text-white ${activeLink === '/userAdmin' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/userAdmin')}
              style={{ 
                backgroundColor: activeLink === '/userAdmin' ? '#B3A369' : '', 
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
            >
              <img 
                src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740905480/account_nhrb9f_eizn1j.png" 
                alt="Accounts" 
                style={{ width: '20px', marginRight: '10px' }} 
              />
              Accounts
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/report&feedback"
              className={`nav-link text-white ${activeLink === '/report&feedback' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/report&feedback')}
              style={{ 
                backgroundColor: activeLink === '/report&feedback' ? '#B3A369' : '', 
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
            >
              <img 
                src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745182641/survey_hnbsml.png" 
                alt="Accreport&feedbackounts" 
                style={{ width: '20px', marginRight: '10px' }} 
              />
              Report and Feedback
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout Button - Fixed at bottom */}
      <div 
        className="sticky-bottom p-3" 
        style={{
              position: 'sticky',
              bottom: 0,
        }}
      >
        <hr />
        <button 
          onClick={handleLogout}
          className="cbtn cbtn-secondary w-100 d-flex align-items-center justify-content-center"
          style={{ 
            borderRadius: '5px',
            padding: '10px',
            transition: 'background-color 0.3s ease'
          }}
        >
          <img 
            src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745182641/survey_hnbsml.png" 
            style={{ width: '20px', marginRight: '10px' }} 
          />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default SideNav;