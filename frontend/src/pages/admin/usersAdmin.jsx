import React, { useState, useEffect } from "react";
import { Table, Form, Button, Modal, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "../../components/sideNavAdmin"; // Import the SideNav component

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]); // State to store fetched users
  const [searchQuery, setSearchQuery] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Number of users per page

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/user-data"
        ).catch(() =>
          fetch("https://cuisining-v1.onrender.com/api/user/user-data")
        );        
        // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUsers(
          data.map((user, index) => ({
            _id: user._id, // Profile document ID
            name: user.fullName,
            email: user.email,
            cuisiningId: user.cuisiningId,
            createdAt: new Date(user.accountCreated).toLocaleString(), // Format date
          }))
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      (user.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (user.cuisiningId || "").includes(searchQuery) ||
      (user.email || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Handle edit user name
  const handleEdit = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleNameChange = (e) => {
    setEditUser({ ...editUser, name: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (!editUser || !editUser._id) {
        throw new Error("Invalid user ID");
      }
  
      const backendURL = process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000";

      const response = await fetch(
        `${backendURL}/api/user/update-name/${editUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName: editUser.name }),
        }
      );

      
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update user name");
      }
  
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === editUser._id ? { ...user, name: editUser.name } : user
        )
      );
  
      setShowModal(false);
    } catch (error) {
      console.error("Error updating user name:", error);
      alert(error.message || "Failed to update user name. Please try again.");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Side Navigation */}
        <SideNav />

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className="mt-2">User Management</h1>

          {/* Search Bar */}
          <div className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search by name, email, or cuisiningId"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* User Table */}
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Cuisining ID</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td> {/* Incrementing ID */}
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.cuisiningId}</td>
                    <td>{user.createdAt}</td>
                    <td>
                      <Button variant="primary" size="sm" onClick={() => handleEdit(user)}>
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Pagination */}
          <div className="d-flex justify-content-center">
            <Pagination>
              {Array.from({
                length: Math.ceil(filteredUsers.length / usersPerPage),
              }).map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>

          {/* Edit Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editUser ? editUser.name : ""}
                  onChange={handleNameChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default AdminUserManagement;