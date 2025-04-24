// File: src/pages/admin/ReportFeedbackAdmin.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../components/sideNavAdmin';
import { Tab, Tabs, Modal, Button, Form, Badge } from 'react-bootstrap';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const ReportFeedbackAdmin = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [reports, setReports] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [metadata, setMetadata] = useState({ 
    totalItems: 0, 
    currentPage: 1, 
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ 
    key: 'createdAt', 
    direction: 'desc' 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [averageRating, setAverageRating] = useState(0);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseSuccess, setResponseSuccess] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const limit = 8;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const fetchData = async (page = 1) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const endpoint = activeTab === 'reports' ? 'reports' : 'ratings';
      const url = `${process.env.BACKEND_LINK || "http://localhost:5000"}/api/${endpoint}?page=${page}&limit=${limit}`;

      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      
      const data = await response.json();
      
      if (activeTab === 'reports') {
        setReports(data.data || []);
        setMetadata({
          totalItems: data.pagination.totalReports || 0,
          currentPage: data.pagination.currentPage || 1,
          totalPages: data.pagination.totalPages || 0,
          hasNextPage: data.pagination.hasNextPage || false,
          hasPreviousPage: data.pagination.hasPreviousPage || false
        });
      } else {
        setFeedback(data.data || []);
        setAverageRating(data.averageRating || 0);
        setMetadata({
          totalItems: data.pagination.totalRatings || 0,
          currentPage: data.pagination.currentPage || 1,
          totalPages: data.pagination.totalPages || 0,
          hasNextPage: data.pagination.hasNextPage || false,
          hasPreviousPage: data.pagination.hasPreviousPage || false
        });
      }
    } catch (err) {
      console.error(`Error fetching ${activeTab}:`, err);
      setError(err.message);
      setReports([]);
      setFeedback([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [activeTab, currentPage]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const requestSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const renderSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? <BiChevronUp /> : <BiChevronDown />;
  };

  const getPaginationRange = () => {
    const totalPages = metadata.totalPages || 0;
    const currentPage = metadata.currentPage || 1;
    const delta = 2;
    const range = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
      return range;
    }

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    range.unshift(1);

    if (currentPage + delta < totalPages - 1) {
      range.push('...');
    }
    range.push(totalPages);

    return range;
  };

  const handleOpenResponseModal = (item) => {
    setSelectedItem(item);
    setResponseMessage(item.adminResponse || '');
    setShowResponseModal(true);
  };

  const handleOpenDetailsModal = (item) => {
    setSelectedItem(item);
    setShowDetailsModal(true);
  };

  const handleCloseResponseModal = () => {
    setShowResponseModal(false);
    setSelectedItem(null);
    setResponseMessage('');
    setResponseSuccess(null);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedItem(null);
  };

  // In your ReportFeedbackAdmin.js
const handleSubmitResponse = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setResponseSuccess(null);

  try {
    // Get the admin's email (you might get this from your auth context or props)
    const adminEmail = 'admin@example.com'; // Replace with actual admin email from your auth system

    const url = `${process.env.BACKEND_LINK || "http://localhost:5000"}/api/respond/${selectedItem._id}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        adminResponse: responseMessage,
        status: 'resolved',
        adminEmail // Send the admin's email
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const responseData = await response.json();
    
    if (activeTab === 'reports') {
      setReports(reports.map(report => 
        report._id === selectedItem._id 
          ? { ...report, 
              adminResponse: responseMessage, 
              status: 'resolved',
              respondedAt: new Date().toISOString(),
              adminEmail
            } 
          : report
      ));
    } else {
      setFeedback(feedback.map(item => 
        item._id === selectedItem._id 
          ? { ...item, 
              adminResponse: responseMessage, 
              status: 'resolved',
              respondedAt: new Date().toISOString(),
              adminEmail
            } 
          : item
      ));
    }

    setResponseSuccess('Response submitted and email notification sent successfully!');
    
    setTimeout(() => {
      handleCloseResponseModal();
    }, 2000);
    
  } catch (err) {
    console.error('Error submitting response:', err);
    setResponseSuccess(`Error: ${err.message}`);
  } finally {
    setIsLoading(false);
  }
};

  const handleStatusChange = async (item, newStatus) => {
    setIsLoading(true);
    
    try {
      const url = `${process.env.BACKEND_LINK || "http://localhost:5000"}/api/status/${item._id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      if (activeTab === 'reports') {
        setReports(reports.map(report => 
          report._id === item._id ? { ...report, status: newStatus } : report
        ));
      } else {
        setFeedback(feedback.map(feedbackItem => 
          feedbackItem._id === item._id ? { ...feedbackItem, status: newStatus } : feedbackItem
        ));
      }
      
    } catch (err) {
      console.error('Error updating status:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SideNav />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className="mt-2">Reports & Feedback</h1>

          {error && (
            <div className="alert alert-danger" role="alert">
              Error loading data: {error}
            </div>
          )}

          {isLoading && !showResponseModal && (
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => {
              setActiveTab(k);
              setCurrentPage(1);
            }}
            className="mb-3"
          >
            <Tab eventKey="reports" title="Reports">
              <div className="row mt-3">
                <div className="col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search reports..."
                      value={searchTerm}
                      onChange={handleSearch}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th onClick={() => !isLoading && requestSort('user')}>
                                User {renderSortIndicator('user')}
                              </th>
                              <th>Message</th>
                              <th>Status</th>
                              <th onClick={() => !isLoading && requestSort('createdAt')}>
                                Date {renderSortIndicator('createdAt')}
                              </th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reports && reports.length > 0 ? (
                              reports.map((report) => (
                                <tr key={report._id}>
                                  <td>{report.nameOfTheReporter || report.userId?.name || 'Anonymous'}</td>
                                  <td>
                                    {report.reportMessage?.length > 50 
                                      ? `${report.reportMessage.substring(0, 50)}...` 
                                      : report.reportMessage}
                                  </td>
                                  <td>
                                    <Badge bg={report.status === 'resolved' ? 'success' : 'secondary'}>
                                      {report.status || 'pending'}
                                    </Badge>
                                  </td>
                                  <td>{formatDate(report.createdAt)}</td>
                                  <td>
                                    <button 
                                      className="btn btn-sm btn-outline-primary me-2"
                                      onClick={() => handleOpenDetailsModal(report)}
                                    >
                                      View
                                    </button>
                                    <button 
                                      className="btn btn-sm btn-outline-info me-2"
                                      onClick={() => handleOpenResponseModal(report)}
                                    >
                                      {report.adminResponse ? 'Edit Response' : 'Respond'}
                                    </button>
                                    <button 
                                      className="btn btn-sm btn-outline-success"
                                      onClick={() => handleStatusChange(report, report.status === 'resolved' ? 'pending' : 'resolved')}
                                    >
                                      {report.status === 'resolved' ? 'Reopen' : 'Resolve'}
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="5" className="text-center">
                                  {isLoading ? 'Loading...' : 'No reports found'}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="feedback" title="Feedback">
              <div className="row mt-3">
                <div className="col-12">
                  <div className="alert alert-info">
                    Average Rating: <strong>{averageRating.toFixed(1)}</strong> / 5
                  </div>
                  
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search feedback..."
                      value={searchTerm}
                      onChange={handleSearch}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th onClick={() => !isLoading && requestSort('user')}>
                                User {renderSortIndicator('user')}
                              </th>
                              <th onClick={() => !isLoading && requestSort('rating')}>
                                Rating {renderSortIndicator('rating')}
                              </th>
                              <th>Comment</th>
                              <th onClick={() => !isLoading && requestSort('createdAt')}>
                                Date {renderSortIndicator('createdAt')}
                              </th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feedback && feedback.length > 0 ? (
                              feedback.map((item) => (
                                <tr key={item._id}>
                                  <td>{item.nameOfTheRater || item.userId?.name || 'Anonymous'}</td>
                                  <td>
                                    <span className="text-warning">
                                      {'★'.repeat(item.rating || 0)}{'☆'.repeat(5 - (item.rating || 0))}
                                      <span className="text-dark ms-2">({item.rating})</span>
                                    </span>
                                  </td>
                                  <td>
                                    {item.feedback?.length > 30 
                                      ? `${item.feedback.substring(0, 30)}...` 
                                      : item.feedback || 'No comment provided'}
                                  </td>
                                  <td>{formatDate(item.createdAt)}</td>
                                  <td>
                                    <Badge bg={item.status === 'resolved' ? 'success' : 'secondary'}>
                                      {item.status || 'pending'}
                                    </Badge>
                                  </td>
                                  <td>
                                    <button 
                                      className="btn btn-sm btn-outline-primary me-2"
                                      onClick={() => handleOpenDetailsModal(item)}
                                    >
                                      View
                                    </button>
                                    <button 
                                      className="btn btn-sm btn-outline-info me-2"
                                      onClick={() => handleOpenResponseModal(item)}
                                    >
                                      {item.adminResponse ? 'Edit Response' : 'Respond'}
                                    </button>
                                    <button 
                                      className="btn btn-sm btn-outline-success"
                                      onClick={() => handleStatusChange(item, item.status === 'resolved' ? 'pending' : 'resolved')}
                                    >
                                      {item.status === 'resolved' ? 'Reopen' : 'Resolve'}
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="6" className="text-center">
                                  {isLoading ? 'Loading...' : 'No feedback found'}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>

          {!isLoading && metadata.totalPages > 1 && (
            <nav aria-label="Page navigation" className="mt-4">
              <ul className="pagination justify-content-center flex-wrap">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    aria-label="First"
                  >
                    <span aria-hidden="true">&laquo;&laquo;</span>
                  </button>
                </li>
                
                <li className={`page-item ${!metadata.hasPreviousPage ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={!metadata.hasPreviousPage}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                
                {getPaginationRange().map((page, index) => (
                  <li 
                    key={index} 
                    className={`page-item ${page === '...' ? 'disabled' : ''} ${currentPage === page ? 'active' : ''}`}
                  >
                    {page === '...' ? (
                      <span className="page-link">...</span>
                    ) : (
                      <button 
                        className="page-link" 
                        onClick={() => setCurrentPage(page)}
                        disabled={page === '...'}
                      >
                        {page}
                      </button>
                    )}
                  </li>
                ))}
                
                <li className={`page-item ${!metadata.hasNextPage ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, metadata.totalPages))}
                    disabled={!metadata.hasNextPage}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
                
                <li className={`page-item ${currentPage === metadata.totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(metadata.totalPages)}
                    disabled={currentPage === metadata.totalPages}
                    aria-label="Last"
                  >
                    <span aria-hidden="true">&raquo;&raquo;</span>
                  </button>
                </li>
              </ul>
              
              <div className="text-center mt-2">
                <small className="text-muted">
                  Showing page {currentPage} of {metadata.totalPages} | 
                  Total {metadata.totalItems} {activeTab === 'reports' ? 'reports' : 'feedback items'}
                </small>
              </div>
            </nav>
          )}

          {/* Response Modal */}
          <Modal 
            show={showResponseModal} 
            onHide={handleCloseResponseModal}
            backdrop="static"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedItem?.adminResponse ? 'Edit Response' : 'Respond to User'}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {responseSuccess && (
                <div className={`alert ${responseSuccess.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                  {responseSuccess}
                </div>
              )}
              
              <Form onSubmit={handleSubmitResponse}>
                <div className="mb-3">
                  <h6>User Information:</h6>
                  <p className="mb-1">
                    <strong>Name:</strong> {selectedItem?.nameOfTheReporter || selectedItem?.nameOfTheRater || 'Anonymous'}
                  </p>
                  {activeTab === 'reports' && (
                    <p className="mb-1">
                      <strong>Report:</strong> {selectedItem?.reportMessage}
                    </p>
                  )}
                  {activeTab === 'feedback' && (
                    <>
                      <p className="mb-1">
                        <strong>Rating:</strong> {selectedItem?.rating}/5
                      </p>
                      <p className="mb-1">
                        <strong>Comment:</strong> {selectedItem?.feedback || 'No comment provided'}
                      </p>
                    </>
                  )}
                </div>
                
                <Form.Group className="mb-3">
                  <Form.Label>Your Response</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={responseMessage}
                    onChange={(e) => setResponseMessage(e.target.value)}
                    placeholder="Type your response here..."
                    required
                  />
                </Form.Group>

                <div className="alert alert-info">
                  <i className="bi bi-info-circle me-2"></i>
                  This response will be sent to the user via email.
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseResponseModal}>
                Cancel
              </Button>
              <Button 
                variant="primary" 
                onClick={handleSubmitResponse}
                disabled={!responseMessage.trim() || isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  'Send Response'
                )}
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Details Modal */}
          <Modal 
            show={showDetailsModal} 
            onHide={handleCloseDetailsModal}
            centered
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {activeTab === 'reports' ? 'Report Details' : 'Feedback Details'}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="card mb-3">
                <div className="card-header bg-light">
                  <h5 className="card-title mb-0">
                    {activeTab === 'reports' ? 'Report Information' : 'Feedback Information'}
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p className="mb-1"><strong>User:</strong> {selectedItem?.nameOfTheReporter || selectedItem?.nameOfTheRater || 'Anonymous'}</p>
                      <p className="mb-1"><strong>Date Submitted:</strong> {formatDate(selectedItem?.createdAt)}</p>
                      <p className="mb-1">
                        <strong>Status:</strong> 
                        <Badge className="ms-2" bg={selectedItem?.status === 'resolved' ? 'success' : 'secondary'}>
                          {selectedItem?.status || 'pending'}
                        </Badge>
                      </p>
                    </div>
                    {activeTab === 'feedback' && (
                      <div className="col-md-6">
                        <p className="mb-1">
                          <strong>Rating:</strong> 
                          <span className="text-warning ms-2">
                            {'★'.repeat(selectedItem?.rating || 0)}{'☆'.repeat(5 - (selectedItem?.rating || 0))}
                            <span className="text-dark ms-1">({selectedItem?.rating}/5)</span>
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <h6>{activeTab === 'reports' ? 'Report Message:' : 'Feedback Comment:'}</h6>
                    <div className="p-3 bg-light rounded">
                      {activeTab === 'reports' 
                        ? (selectedItem?.reportMessage || 'No message provided') 
                        : (selectedItem?.feedback || 'No comment provided')}
                    </div>
                  </div>

                  {selectedItem?.adminResponse && (
                    <div>
                      <h6>Admin Response:</h6>
                      <div className="p-3 bg-light rounded">
                        {selectedItem.adminResponse}
                      </div>
                      <p className="text-muted mt-2 small">
                        <i className="bi bi-clock me-1"></i>
                        {selectedItem.respondedAt ? formatDate(selectedItem.respondedAt) : 'Not specified'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDetailsModal}>
                Close
              </Button>
              {!selectedItem?.adminResponse && (
                <Button 
                  variant="primary" 
                  onClick={() => {
                    handleCloseDetailsModal();
                    handleOpenResponseModal(selectedItem);
                  }}
                >
                  Respond
                </Button>
              )}
              {selectedItem?.adminResponse && (
                <Button 
                  variant="outline-primary" 
                  onClick={() => {
                    handleCloseDetailsModal();
                    handleOpenResponseModal(selectedItem);
                  }}
                >
                  Edit Response
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default ReportFeedbackAdmin;