import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavSettings from './side-nav-settings';

// Function to fetch pro account status
const fetchProAccountStatus = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No token found in localStorage");
    }

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/settings/subscription`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch proAccount status");
    }

    const data = await response.json();
    return data.proAccount; // Return the real proAccount status
  } catch (err) {
    console.error("Error fetching proAccount status:", err.message);
    alert(`⚠️ Failed to fetch proAccount status: ${err.message}`);
    return null;
  }
};

const SubscriptionPage = () => {
  // State to store proAccount status
  const [proAccount, setProAccount] = useState(null); // null indicates loading
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch pro account status on component mount
  useEffect(() => {
    const loadProAccountStatus = async () => {
      const status = await fetchProAccountStatus(); // Fetch the status
      setProAccount(status); // Update state with the fetched status
      setLoading(false); // Stop loading
    };

    loadProAccountStatus();
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f1f1f1' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Side Navigation */}
          <SideNavSettings />
          
          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 p-5">
            <div className="card p-4 shadow-sm">
              <h1 className="fw-bold mb-4">Subscription</h1>
              <p className="lead mb-4">
                Unlock and explore more features with our <strong>Pro account</strong>.
              </p>
              
              {/* Feature list with dynamic name and description */}
              <div className="feature-list">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ width: '48px', height: '48px' }}>
                    {loading ? (
                      // Show a loading spinner while fetching
                      <div
                        className="spinner-border text-primary"
                        role="status"
                        style={{ width: '48px', height: '48px' }}
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : proAccount === null ? (
                      // Show a placeholder icon if there's an error
                      <img
                        src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745135522/cross_rqpnqo.png"
                        alt="Error Icon"
                        style={{ width: '48px', height: '48px' }}
                      />
                    ) : proAccount ? (
                      // Show check icon for active subscription
                      <img
                        src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745135522/check_1_ag8ivu.png"
                        alt="Check Icon"
                        style={{ width: '48px', height: '48px' }}
                      />
                    ) : (
                      // Show cross icon for inactive subscription
                      <img
                        src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745135522/cross_rqpnqo.png"
                        alt="Cross Icon"
                        style={{ width: '48px', height: '48px' }}
                      />
                    )}
                  </div>
                  <div>
                    <h5 className="mb-1">Subscriptions</h5>
                    <p className="text-muted mb-0">
                      Choose a Subscription plan that fits your needs and start enjoying all the features with our Pro account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;