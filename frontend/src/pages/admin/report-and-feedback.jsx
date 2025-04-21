import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../components/sideNavAdmin';
import { Tab, Tabs } from 'react-bootstrap';

const ReportFeedbackAdmin = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [reports, setReports] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [metadata, setMetadata] = useState({ 
    totalItems: 0, 
    currentPage: 1, 
    totalPages: 0 
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ 
    key: 'date', 
    direction: 'desc' 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 10;

  // Format date with time
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

  // Fetch data from the backend
  const fetchData = async (page = 1) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const url = `http://localhost:5000/api/${activeTab}?page=${page}&limit=${limit}&search=${searchTerm}&sort=${sortConfig.key}&order=${sortConfig.direction}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      
      const data = await response.json();
      
      if (activeTab === 'reports') {
        setReports(data.items);
      } else {
        setFeedback(data.items);
      }
      
      setMetadata({
        totalItems: data.totalItems,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      });
    } catch (err) {
      console.error(`Error fetching ${activeTab}:`, err);
      setError(err.message);
      if (activeTab === 'reports') {
        setReports([]);
      } else {
        setFeedback([]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data when tab, page, search or sort changes
  useEffect(() => {
    fetchData(currentPage);
  }, [activeTab, currentPage, searchTerm, sortConfig]);

  // Handle search with debounce
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Handle sort
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Render sort indicator
  const renderSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return (
      <i className={`bi bi-chevron-${sortConfig.direction === 'asc' ? 'up' : 'down'}`} />
    );
  };

  // Generate pagination range
  const getPaginationRange = () => {
    const totalPages = metadata.totalPages;
    const currentPage = metadata.currentPage;
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

  return (
    <div className="container-fluid">
      <div className="row">
        <SideNav />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className="mt-2">Reports & Feedback</h1>

          {/* Error Alert */}
          {error && (
            <div className="alert alert-danger" role="alert">
              Error loading data: {error}
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* Tab Navigation */}
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
                  {/* Search Bar */}
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

                  {/* Reports Table */}
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th onClick={() => !isLoading && requestSort('user')}>
                                User {renderSortIndicator('user')}
                              </th>
                              <th onClick={() => !isLoading && requestSort('type')}>
                                Type {renderSortIndicator('type')}
                              </th>
                              <th onClick={() => !isLoading && requestSort('status')}>
                                Status {renderSortIndicator('status')}
                              </th>
                              <th onClick={() => !isLoading && requestSort('date')}>
                                Date {renderSortIndicator('date')}
                              </th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reports.length > 0 ? (
                              reports.map((report) => (
                                <tr key={report._id}>
                                  <td>{report.user || 'Anonymous'}</td>
                                  <td>
                                    <span className={`badge ${report.type === 'Bug' ? 'bg-danger' : 'bg-warning'}`}>
                                      {report.type}
                                    </span>
                                  </td>
                                  <td>
                                    <span className={`badge ${report.status === 'Resolved' ? 'bg-success' : report.status === 'Pending' ? 'bg-secondary' : 'bg-primary'}`}>
                                      {report.status}
                                    </span>
                                  </td>
                                  <td>{formatDate(report.date)}</td>
                                  <td>
                                    <button className="btn btn-sm btn-outline-primary me-2">
                                      View
                                    </button>
                                    <button className="btn btn-sm btn-outline-success">
                                      Resolve
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
                  {/* Search Bar */}
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

                  {/* Feedback Table */}
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
                              <th onClick={() => !isLoading && requestSort('date')}>
                                Date {renderSortIndicator('date')}
                              </th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feedback.length > 0 ? (
                              feedback.map((item) => (
                                <tr key={item._id}>
                                  <td>{item.user || 'Anonymous'}</td>
                                  <td>
                                    <span className="text-warning">
                                      {'★'.repeat(item.rating || 0)}{'☆'.repeat(5 - (item.rating || 0))}
                                    </span>
                                  </td>
                                  <td>{formatDate(item.date)}</td>
                                  <td>
                                    <button className="btn btn-sm btn-outline-primary">
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="4" className="text-center">
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

          {/* Pagination */}
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
                
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
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
                
                <li className={`page-item ${currentPage === metadata.totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, metadata.totalPages))}
                    disabled={currentPage === metadata.totalPages}
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
        </main>
      </div>
    </div>
  );
};

export default ReportFeedbackAdmin;