import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="col-md-3 col-lg-2 d-md-block sidebar collapse" style={{ minHeight: '100vh', backgroundColor: '#948F5C' }}>
      <div className="position-sticky pt-3">
        <div className="text-center mb-4">
          <h3 className="text-white">Logo</h3>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={`nav-link text-white ${activeLink === '/dashboard' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/dashboard')}
              style={{ backgroundColor: activeLink === '/dashboard' ? '#B3A369' : '', borderRadius: '5px' }}
            >
              <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741980548/dashboard_f1pvxr.png" alt="Dashboard" style={{ width: '20px', marginRight: '10px' }} />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/transactions"
              className={`nav-link text-white ${activeLink === '/transactions' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/transactions')}
              style={{ backgroundColor: activeLink === '/transactions' ? '#B3A369' : '', borderRadius: '5px' }}
            >
              <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741980591/transfer_amz1q6.png" alt="Transactions" style={{ width: '20px', marginRight: '10px' }} />
              Transactions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/announcement"
              className={`nav-link text-white ${activeLink === '/announcement' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/transactions')}
              style={{ backgroundColor: activeLink === '/announcement' ? '#B3A369' : '', borderRadius: '5px' }}
            >
              <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741981835/ringing_ieuuli.png" alt="Transactions" style={{ width: '20px', marginRight: '10px' }} />
              Announcement
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/userAdmin"
              className={`nav-link text-white ${activeLink === '/accounts' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/userAdmin')}
              style={{ backgroundColor: activeLink === '/userAdmin' ? '#B3A369' : '', borderRadius: '5px' }}
            >
              <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741981835/ringing_ieuuli.png" alt="Transactions" style={{ width: '20px', marginRight: '10px' }} />
              Accounts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;