import React, { useState } from 'react';
import axios from 'axios';

const CertificateGenerator = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    courseName: '',
    completionDate: '',
    certificateId: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Call your backend endpoint
      const response = await axios.post(
        'http://localhost:5000/api/generate-certificate',
        formData,
        {
          responseType: 'blob' // Important for handling PDF response
        }
      );

      // Create a download link for the PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'certificate.pdf');
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (err) {
      setError(err.response?.data || 'Failed to generate certificate');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="certificate-generator">
      <h2>Generate Certificate</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="completionDate">Completion Date:</label>
          <input
            type="date"
            id="completionDate"
            name="completionDate"
            value={formData.completionDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="certificateId">Certificate ID:</label>
          <input
            type="text"
            id="certificateId"
            name="certificateId"
            value={formData.certificateId}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate PDF'}
        </button>
      </form>
    </div>
  );
};

export default CertificateGenerator;