import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
    import SideNav from '../../components/sideNavAdmin';

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = [
    { id: '#5089', customer: 'Christian Antonio', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Failed' },
    { id: '#5089', customer: 'Michael Tiu', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Success' },
    { id: '#5089', customer: 'Ariay D.', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
    { id: '#5089', customer: 'Karl Mirenda', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
    { id: '#5089', customer: 'Karl Briz', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
    { id: '#5089', customer: 'Shawn France', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
    { id: '#5089', customer: 'Kenneth Shee', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
    { id: '#5089', customer: 'Mark J.J', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
    { id: '#5089', customer: 'Aaroon Dadivas', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
    { id: '#5089', customer: 'Kareem Abdul', date: '6 April, 2023', total: '$250', method: 'GC', status: 'Pending' },
  ];

  const filteredTransactions = transactions.filter(transaction =>
    transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRefund = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const confirmRefund = () => {
    // Handle refund logic here
    console.log('Refunding transaction:', selectedTransaction);
    setShowModal(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Side Navigation */}
        <SideNav />

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className='mt-2'>Transactions</h1>

          {/* Search Bar */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Transaction ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Transactions Table */}
          <table className="table">
            <thead>
              <tr>
                <th>TRANSACTION ID</th>
                <th>CUSTOMER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>METHOD</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.id}</td>
                  <td>{transaction.customer}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.total}</td>
                  <td>{transaction.method}</td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><button className="dropdown-item" onClick={() => handleRefund(transaction)}>Refund</button></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Refund Confirmation Modal */}
          <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Refund</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to refund transaction {selectedTransaction?.id}?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>No</button>
                  <button type="button" className="btn btn-primary" onClick={confirmRefund}>Yes</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;