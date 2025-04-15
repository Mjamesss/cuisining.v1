import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavSettings from './side-nav-settings';

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cuisiningId: '',
    region: '',
    country: '',
    contactNo: '',
    gender: '',
    avatarUrl: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No token found in localStorage.");
        }

        const profileResponse = await axios.get(
          "http://localhost:5000/api/settings/settings-profile", 
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const { 
          fullName, 
          email, 
          cuisiningId,
          region,
          country,
          contactNo,
          gender,
          avatarUrl
        } = profileResponse.data;

        setFormData({
          name: fullName,
          email: email,
          cuisiningId: cuisiningId,
          region: region || 'N/A',
          country: country || 'N/A',
          contactNo: contactNo || 'N/A',
          gender: gender || 'N/A',
          avatarUrl: avatarUrl || 'https://res.cloudinary.com/dm6wodni6/image/upload/v1739967728/account_nhrb9f.png'
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

  if (loading) {
    return <div className="text-center p-5">Loading profile data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  const renderContent = () => {
    if (activeTab === 'personalDetails') {
      return (
        <div className="card p-4 shadow-sm">
          <h4 className="fw-bold mb-3">Personal Details</h4>
          <p className="text-muted mb-4">Manage your personal information.</p>

          <div className="d-flex align-items-center mb-4">
            <img 
              src={formData.avatarUrl} 
              alt="Profile" 
              className="rounded-circle me-3" 
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
            <div>
              <h5 className="mb-1">{formData.name || 'N/A'}</h5>
              <small className="text-muted">{formData.email || 'N/A'}</small>
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-3">
              <strong>Cuisining ID:</strong>{' '}
              <span className="ms-2">{formData.cuisiningId || 'N/A'}</span>
            </div>
          </div>

          <hr />

          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Region</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.region} 
                  disabled 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.country} 
                  disabled 
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Contact No.</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.contactNo} 
                  disabled 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.gender} 
                  disabled 
                />
              </div>
            </div>

            <button type="button" className="cbtn cbtn-primary  mt-3 px-4">
              Edit
            </button>
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