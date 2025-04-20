import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavSettings from './side-nav-settings';

// Feature data - replace with your actual boolean values
const features = [
  { proAccount: true }, // Subscriptions availability status
];

const SubscriptionPage = () => {
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
              
              {/* Feature list with hardcoded name and description */}
              <div className="feature-list">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ width: '48px', height: '48px' }}>
                    {features[0].proAccount ? (
                      <img
                        src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745135522/check_1_ag8ivu.png" // Replace with your check icon URL
                        alt="Check Icon"
                        style={{ width: '48px', height: '48px' }}
                      />
                    ) : (
                      <img
                        src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745135522/cross_rqpnqo.png" // Replace with your cross icon URL
                        alt="Cross Icon"
                        style={{ width: '48px', height: '48px' }}
                      />
                    )}
                  </div>
                  <div>
                    <h5 className="mb-1">Subscriptions</h5>
                    <p className="text-muted mb-0">
                      Choose a Subscription plan that fits your needs and start enjoyingn all the features with our Pro account.
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