import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons from react-icons

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "cuisining" && password === "cuisining") {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dm6wodni6/image/upload/v1738813637/login-bg_n5skpt.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#363100", // Fallback color
      }}
    >
      <div
        className="card shadow-lg p-4 rounded-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #ddd",
        }}
      >
        {/* Logo or Icon Section */}
        <div className="text-center mb-4">
          <FaUser size={60} color="#363100" />
          <h3 className="mt-3 text-dark">Cuisining Admin</h3>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Username Field */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-dark">
              <FaUser className="me-2" /> Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-dark">
              <FaLock className="me-2" /> Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="cbtn cbtn-primary w-100 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;