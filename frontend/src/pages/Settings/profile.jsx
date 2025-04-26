import React, { useState, useEffect } from "react";
import "../../fw-cuisining.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios"; // For making API requests
import Navbar from '../../components/Navbar';

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
  const [modules, setModules] = useState([]); // Dynamic modules state
  const [equivalentScore, setEquivalentScore] = useState(0); // Overall progress score
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch profile data (name, email, cuisiningId)
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const profileResponse = await axios.get(
          "http://localhost:5000/api/settings/settings-profile",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const { fullName, email, cuisiningId } = profileResponse.data;

        // Update state with fetched data
        setFormData((prevData) => ({
          ...prevData,
          name: fullName,
          email: email,
          cuisiningId: cuisiningId,
        }));
      } catch (err) {
        console.error("Error fetching profile data:", err);
      }
    };

    fetchProfileData();
  }, []);

  // Fetch avatar URL
  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const token = localStorage.getItem("authToken");
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

  // Fetch progress data
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await axios.get("http://localhost:5000/api/profile/progress", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("API Response:", response.data); // Log the response

        const { modules, equivalentScore } = response.data;

        // Ensure the "Final Assessment" module exists
        const hasFinalAssessment = modules.some((module) => module.title === "Final Assessment");
        if (!hasFinalAssessment) {
          modules.push({
            title: "Final Assessment",
            progress: 0, // Default progress if not provided by the backend
            image: "https://via.placeholder.com/220x120",
          });
        }

        setModules(modules);
        setEquivalentScore(equivalentScore);
      } catch (err) {
        setError(err.message || "Failed to fetch progress data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
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
      <Navbar />
      {/* Profile Section */}
      <div className="container d-flex flex-column align-items-start mt-5">
        <h1 className="font-weight-800">Profile</h1>
      </div>

      <div className="container my-2">
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
                <strong>CuisiningID:</strong> {formData.cuisiningId}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="container mt-5">
        <h4 className="mb-4" style={{ fontWeight: "bold", color: "#3D320C" }}>
          Course Modules
        </h4>
        <div className="mt-4">
              <h5 style={{ fontWeight: "bold", color: "#3D320C" }}>
                Overall Progress: {equivalentScore}%
              </h5>
            </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
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
            
          </>
        )}
      </div>
    </>
  );
};

export default Settings;