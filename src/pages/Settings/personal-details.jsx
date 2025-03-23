import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavSettings from './side-nav-settings';

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');
  const [formData, setFormData] = useState({
    name: '', // To store fullName
    email: '', // To store email
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve the JWT token from localStorage

        if (!token) {
          throw new Error("No token found in localStorage.");
        }

        // Fetch fName, email, and cuisiningId from /settings-profile endpoint
        const profileResponse = await axios.get("http://localhost:5000/api/settings/settings-profile", {
          headers: { Authorization: `Bearer ${token}` }, // Include the token in the Authorization header
        });

        const { fullName, email, cuisiningId } = profileResponse.data; // Destructure the response data

        // Update state with fetched data
        setFormData((prevData) => ({
          ...prevData,
          name: fullName,
          email: email,
          cuisiningId: cuisiningId, // Save cuisiningId for later use
        }));

        console.log("Fetched Profile Data:", { fullName, email, cuisiningId }); // Optional: Log the fetched data
      } catch (error) {
        console.error("Error fetching profile data:", error.message); // Log the error message
        setError(error.message); // Set the error state
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchProfileData(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures this runs only once on mount


  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render content based on active tab
  const renderContent = () => {
    if (activeTab === 'personalDetails') {
      return (
        <div className="card p-4 shadow-sm">
          <h4 className="fw-bold mb-3">Personal Details</h4>
          <p className="text-muted mb-4">Manage your personal information.</p>

          <div>
            <div className="mb-3">
              <strong>Full Name:</strong>{' '}
              <span className="ms-2">{formData.name || 'N/A'}</span>
            </div>
            <div className="mb-3">
              <strong>Email:</strong>{' '}
              <span className="ms-2">{formData.email || 'N/A'}</span>
            </div>
            <div className="mb-3">
              <strong>CuisiningId:</strong>{' '}
              <span className="ms-2">{formData.cuisiningId || 'N/A'}</span>
            </div>
          </div>

          <hr />

          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Region</label>
                <input type="text" className="form-control" value="Cavite" disabled />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" value="Philippines" disabled />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Contact No.</label>
                <input type="text" className="form-control" value="639356-846-672" disabled />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <input type="text" className="form-control" value="Male" disabled />
              </div>
            </div>

            <button type="button" className="cbtn cbtn-primary rounded-pill mt-3 px-4">Edit</button>
          </form>
        </div>
      );
    }

    return <div>Content for {activeTab}</div>;
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f1f1f1' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Navigation */}
          <SideNavSettings activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 p-5">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;