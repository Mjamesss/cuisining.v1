import React, { useState, useEffect } from "react";
import "../../fw-cuisining.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios"; // For making API requests

const modules = [
  { title: "Fundamentals of Professional Cookery", progress: 100, image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_72_oawnk6.png" },
  { title: "Preparing Appetizers and Hors d’oeuvres", progress: 1, image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_72_oawnk6.png" },
  { title: "Preparing Salads & Salad Dressings", progress: 0, image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_72_oawnk6.png" },
  { title: "Preparing Egg, Vegetable, and Farinaceous Dishes", progress: 0, image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_72_oawnk6.png" },
  { title: "Preparing Sandwiches", progress: 0, image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_72_oawnk6.png" },
  { title: "Final Assessment", progress: 0, image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1740904806/image_72_oawnk6.png" },
];

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "mmvel123",
    country: "Philippines",
    city: "Caloocan",
    barangay: "Brgy. 171",
    district: "1",
    number: "Btk 9 Lot 29",
    building: "Tierra Nova Royale III",
    province: "Metro Manila",
    region: "NCR",
    sex: "Male",
    civilStatus: "Single",
    contactNo: "08060793421",
  });
  const [avatar, setAvatar] = useState("");

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        // Fetch fName and email from /settings-profile endpoint
        const profileResponse = await axios.get("http://localhost:5000/api/settings/settings-profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const { fName, email } = profileResponse.data;


        // Update state with fetched data
        setFormData((prevData) => ({
          ...prevData,
          name: fName,
          email: email,
        }));
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Ensure the correct key is used
        if (!token) {
          throw new Error("No token found. Please log in.");
        }
  
        const response = await fetch("http://localhost:5000/api/settings/avatar", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log("Avatar Data:", data); // Log the response
  
        // Update the avatar state with the fetched URL
        if (data.avatarUrl) {
          setAvatar(data.avatarUrl);
        } else {
          setError("No avatar URL available.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch avatar.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchAvatar();
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log(formData); // Replace with actual save logic
    setShowModal(false);
  };

  return (
    <>
      {/* Profile Section */}
      <div className="container d-flex flex-column align-items-start mt-4">
        <h1 className="font-weight-800">Profile</h1>
      </div>

      <div className="container my-4">
        <div className="d-flex flex-column flex-md-row gap-4 align-items-start">
          {/* Avatar */}
          <div
            className="d-flex justify-content-center"
            style={{ width: "100%", maxWidth: "260px", height: "auto" }}
          >
            <img
              src={avatar}
              alt="Profile Avatar"
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Profile Details */}
          <div
            className="flex-grow-2 p-3 p-md-5 rounded shadow-sm d-flex flex-column w-100"
            style={{ backgroundColor: "#F2F2F2" }}
          >
            <div>
              <p className="mb-2">
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="mb-0">
                <strong>Password:</strong>
                <div className="cbtn cbtn-sm ml-1 cbtn-secondary">
                  change
                </div>
              </p>
            </div>

            {/* Edit Button */}
            <div className="mt-auto d-flex justify-content-end">
              <button
                className="cbtn cbtn-secondary mt-3 edit-details-btn"
                onClick={() => setShowModal(true)}
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="container mt-5">
        <h4 className="mb-4" style={{ fontWeight: "bold", color: "#3D320C" }}>
          Course Modules
        </h4>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {modules.map((module, index) => (
            <div className="col" key={index}>
              <div
                className="d-flex flex-column flex-md-row align-items-center p-3 rounded"
                style={{
                  backgroundColor: module.progress === 0 ? "#EAEAEA" : "#fff",
                  opacity: module.progress === 0 ? 0.7 : 1,
                }}
              >
                <img
                  src={module.image}
                  alt={module.title}
                  style={{
                    width: "100%",
                    maxWidth: "220px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "0",
                    marginBottom: "10px",
                    filter: module.progress === 0 ? "grayscale(100%)" : "none",
                  }}
                  className="me-md-3"
                />
                <div className="text-center text-md-start">
                  <h5
                    style={{
                      margin: 0,
                      fontWeight: "bold",
                      color: module.progress === 0 ? "#999" : "#3D320C",
                    }}
                  >
                    {module.title}
                  </h5>
                  <p
                    style={{
                      margin: "5px 0 0",
                      color: module.progress === 0 ? "#999" : "#C1B857",
                      fontWeight: "bold",
                    }}
                  >
                    Progress: {module.progress}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" scrollable={false}>
        <Modal.Header closeButton>
          <Modal.Title className="mt-3 ml-3 font-weight-600">User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Avatar Change */}
            <Form.Group className="mb-4 text-center">
              <img
                src={avatar}
                alt="Profile Avatar"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "10px",
                  backgroundColor: "black",
                }}
              />
              <label htmlFor="avatar-upload">
                <img
                  src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740908939/Camera_c7kuaz.png"
                  alt="Upload Icon"
                  style={{ width: "30px", height: "30px", marginLeft: "10px" }}
                />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
            </Form.Group>

            {/* Name, Username, Email */}
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Address Section */}
            <h6 className="mt-4 mb-3" style={{ fontWeight: "bold" }}>Address</h6>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    placeholder="Enter country"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City/Town</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter city/town"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Barangay</Form.Label>
                  <Form.Control
                    type="text"
                    name="barangay"
                    placeholder="Enter barangay"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>District</Form.Label>
                  <Form.Control
                    type="text"
                    name="district"
                    placeholder="Enter district"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number, Building, Street</Form.Label>
                  <Form.Control
                    type="text"
                    name="number"
                    placeholder="Enter number, building, street"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    type="text"
                    name="province"
                    placeholder="Enter province"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Region</Form.Label>
                  <Form.Control
                    type="text"
                    name="region"
                    placeholder="Enter region"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Personal Details */}
            <h6 className="mt-4 mb-3" style={{ fontWeight: "bold" }}>Personal Details</h6>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Sex</Form.Label>
                  <Form.Control
                    type="text"
                    name="sex"
                    placeholder="Enter sex"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Civil Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="civilStatus"
                    placeholder="Enter civil status"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Contact No.</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactNo"
                    placeholder="Enter contact number"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="cbtn cbtn-secondary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Settings;