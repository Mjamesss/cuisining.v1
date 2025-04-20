import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../components/sideNavAdmin';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [metadata, setMetadata] = useState({ 
    totalProUsers: 0, 
    currentPage: 1, 
    totalPages: 0 
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ 
    key: 'paymentDate', 
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

  // Validate and normalize transaction data
  const normalizeTransaction = (transaction) => ({
    ...transaction,
    _id: transaction._id || Math.random().toString(36).substr(2, 9),
    transacId: transaction.transacId || 'N/A',
    fullName: transaction.fullName || 'Unknown Customer',
    amount: typeof transaction.amount === 'number' ? 
           transaction.amount : 
           parseFloat(transaction.amount) || 0,
    paymentDate: transaction.paymentDate || new Date().toISOString(),
    modeOfPayment: transaction.modeOfPayment || 'unknown'
  });

  // Fetch data from the backend
  const fetchData = async (page = 1) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `http://localhost:5000/api/transactions/pro-users?page=${page}&limit=${limit}&search=${searchTerm}&sort=${sortConfig.key}&order=${sortConfig.direction}`
      );
      
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      
      const data = await response.json();
      
      // Validate and normalize all transactions
      const validatedTransactions = data.users.map(normalizeTransaction);
      
      setTransactions(validatedTransactions);
      setMetadata({
        totalProUsers: data.totalProUsers,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      });
    } catch (err) {
      console.error('Error fetching transactions:', err);
      setError(err.message);
      setTransactions([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount and when dependencies change
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, searchTerm, sortConfig]);

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

    // Show all pages if total pages is less than 7
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
      return range;
    }

    // Add pages around current page
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    // Add first page and possible ellipsis
    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    range.unshift(1);

    // Add last page and possible ellipsis
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
          <h1 className="mt-2">Transactions</h1>

          {/* Error Alert */}
          {error && (
            <div className="alert alert-danger" role="alert">
              Error loading transactions: {error}
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

          {/* Search Bar */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Transaction ID or Customer Name"
              value={searchTerm}
              onChange={handleSearch}
              disabled={isLoading}
            />
          </div>

          {/* Transactions Table */}
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th onClick={() => !isLoading && requestSort('transacId')}>
                    Transaction ID {renderSortIndicator('transacId')}
                  </th>
                  <th onClick={() => !isLoading && requestSort('fullName')}>
                    Customer {renderSortIndicator('fullName')}
                  </th>
                  <th onClick={() => !isLoading && requestSort('paymentDate')}>
                    Date & Time {renderSortIndicator('paymentDate')}
                  </th>
                  <th onClick={() => !isLoading && requestSort('amount')}>
                    Amount {renderSortIndicator('amount')}
                  </th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 ? (
                  transactions.map((transaction) => (
                    <tr key={transaction._id}>
                      <td>{transaction.transacId}</td>
                      <td>{transaction.fullName}</td>
                      <td>{formatDate(transaction.paymentDate)}</td>
                      <td>₱{transaction.amount.toFixed(2)}</td>
                      <td>{transaction.modeOfPayment.toUpperCase()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      {isLoading ? 'Loading...' : 'No transactions found'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!isLoading && metadata.totalPages > 1 && (
            <nav aria-label="Page navigation">
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
                  Total {metadata.totalProUsers} transactions
                </small>
              </div>
            </nav>
          )}
        </main>
      </div>
    </div>
  );
};

export default Transactions;