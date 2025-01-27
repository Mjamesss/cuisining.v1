import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation from react-router-dom
import '../fw-cuisining.css';

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const location = useLocation();  // Get the current location
  /* Show modal when navigating to /testing
  useEffect(() => {
    if (location.pathname === '/testing') {
      openModal();
    }
  }, [location]);
  */
  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className={`cmodal-overlay ${isModalOpen ? 'show' : ''}`}>
          <div className="cmodal">
            <div className="cmodal-header">
              <h5 className="cmodal-title">Modal Title</h5>
              <button className="cmodal-close" onClick={closeModal}>×</button>
            </div>
            <div className="cmodal-body">
            <p>
              tignan mo nalang sa code
              </p>
            </div>
            <div className="cmodal-footer">
              <button className="cbtn cbtn-secondary" onClick={closeModal}>Close</button>
              <button className="cbtn cbtn-primary">Okay</button>
            </div>
          </div>
        </div>
      )}

      {/* Button to trigger modal */}
      <button className="cbtn cbtn-primary" onClick={openModal}>modal</button>
    </div>
  );
};

export default ModalComponent;
