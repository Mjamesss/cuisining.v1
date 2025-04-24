import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavSettings from './side-nav-settings';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    avatarUrl: '',
    canUpdate: true,
    daysRemaining: 0,
    isFirstEdit: true
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: '',
    region: '',
    country: '',
    contactNo: '',
    gender: '',
    avatarUrl: ''
  });

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No token found in localStorage.");
        }
        const response = await axios.get(
          `${process.env.BACKEND_LINK || "http://localhost:5000"}/api/settings/settings-profile`,
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
          avatarUrl,
          canUpdate,
          daysRemaining,
          isFirstEdit
        } = response.data;
        setFormData({
          name: fullName, // Map backend's fullName to frontend's name
          email: email,
          cuisiningId: cuisiningId,
          region: region || 'N/A',
          country: country || 'N/A',
          contactNo: contactNo || 'N/A',
          gender: gender || 'N/A',
          avatarUrl: avatarUrl || 'https://res.cloudinary.com/dm6wodni6/image/upload/v1739967728/account_nhrb9f.png',
          canUpdate,
          daysRemaining,
          isFirstEdit
        });
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
        setError(error.message);
        toast.error("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  const handleEditClick = () => {
    if (!formData.canUpdate && !formData.isFirstEdit) {
      toast.info(`You can update your profile in ${formData.daysRemaining} days`);
      return;
    }
    setEditFormData({
      name: formData.name,
      region: formData.region,
      country: formData.country,
      contactNo: formData.contactNo,
      gender: formData.gender,
      avatarUrl: formData.avatarUrl
    });
    setShowEditModal(true);
  };

  const handleModalClose = () => {
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditFormData(prev => ({
          ...prev,
          avatarUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to save these changes? You will not be able to edit your profile again for 35 days."
    );

    if (!isConfirmed) {
      return; // Exit if the user cancels the confirmation
    }

    try {
      const token = localStorage.getItem("authToken");
      const formDataToSend = new FormData();
      // Append all fields with correct backend field names
      formDataToSend.append('fullName', editFormData.name); // Changed from 'name' to 'fullName'
      formDataToSend.append('region', editFormData.region);
      formDataToSend.append('country', editFormData.country);
      formDataToSend.append('contactNo', editFormData.contactNo);
      formDataToSend.append('gender', editFormData.gender);
      // If avatar was changed, append the file
      if (e.target.avatar?.files[0]) {
        formDataToSend.append('avatar', e.target.avatar.files[0]);
      }

      const response = await axios.put(
        `${process.env.BACKEND_LINK || "http://localhost:5000"}/api/settings/update-profile`,
        formDataToSend,
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      

      // Update the main form data with the new values
      setFormData(prev => ({
        ...prev,
        name: editFormData.name, // Update the display name
        region: editFormData.region,
        country: editFormData.country,
        contactNo: editFormData.contactNo,
        gender: editFormData.gender,
        avatarUrl: response.data.avatarUrl || prev.avatarUrl,
        canUpdate: false,
        daysRemaining: 35,
        isFirstEdit: false
      }));
      setShowEditModal(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to update profile");
      }
    }
  };

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
            <button 
              type="button" 
              className={`cbtn ${formData.isFirstEdit ? 'cbtn-primary' : 'cbtn-outline-primary'}`}
              onClick={handleEditClick}
              disabled={!formData.canUpdate && !formData.isFirstEdit}
            >
              {formData.isFirstEdit ? 'Complete Your Profile' : 
               formData.canUpdate ? 'Edit Details' : 
               `Update available in ${formData.daysRemaining} days`}
            </button>
            {!formData.isFirstEdit && !formData.canUpdate && (
              <div className="mt-2 text-muted small">
                You can update your profile every 35 days
              </div>
            )}
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
      {/* Edit Details Modal */}
      <Modal show={showEditModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {formData.isFirstEdit ? 'Complete Your Profile' : 'Edit Personal Details'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Avatar Upload */}
            <div className="text-center mb-4">
              <label htmlFor="avatar-upload" style={{ cursor: 'pointer' }}>
                <Image 
                  src={editFormData.avatarUrl} 
                  roundedCircle 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div className="small text-muted mt-2">Click to change avatar</div>
              </label>
              <Form.Control
                type="file"
                id="avatar-upload"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
              />
            </div>
            {/* Name */}
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {/* Region and Country */}
            <div className="row mb-3">
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Region</Form.Label>
                  <Form.Control
                    as="select"
                    name="region"
                    value={editFormData.region}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled className="text-muted">Select Region</option>
                  <option value="NCR">National Capital Region (NCR)</option>
                  <option value="CAR">Cordillera Administrative Region (CAR)</option>
                  <option value="Region I">Ilocos Region (Region I)</option>
                  <option value="Region II">Cagayan Valley (Region II)</option>
                  <option value="Region III">Central Luzon (Region III)</option>
                  <option value="Region IV-A">CALABARZON (Region IV-A)</option>
                  <option value="MIMAROPA">MIMAROPA</option>
                  <option value="Region V">Bicol Region (Region V)</option>
                  <option value="Region VI">Western Visayas (Region VI)</option>
                  <option value="Region VII">Central Visayas (Region VII)</option>
                  <option value="Region VIII">Eastern Visayas (Region VIII)</option>
                  <option value="Region IX">Zamboanga Peninsula (Region IX)</option>
                  <option value="Region X">Northern Mindanao (Region X)</option>
                  <option value="Region XI">Davao Region (Region XI)</option>
                  <option value="Region XII">SOCCSKSARGEN (Region XII)</option>
                  <option value="Region XIII">Caraga (Region XIII)</option>
                  <option value="BARMM">Bangsamoro (BARMM)</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                    type="text"
                    name="country"
                    value={editFormData.country}
                    onChange={handleInputChange}
                    required
                    disabled // Add this attribute to disable the field
                    />
                </Form.Group>
                </div>
            </div>
            {/* Contact Number and Gender */}
            <div className="row mb-3">
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="contactNo"
                    value={editFormData.contactNo}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={editFormData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled className="text-muted">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="cbtn cbtn-outline-secondary me-2" 
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="cbtn cbtn-primary"
              >
                Save Changes
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingsComponent;