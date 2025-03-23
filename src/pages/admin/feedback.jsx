import React, { useState } from 'react';

const FeedbackAdmin = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const newFeedback = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toLocaleString(),
      };
      setFeedbackList([...feedbackList, newFeedback]);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Feedback Admin</h1>
      <div className="row">
        {/* Feedback Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Submit Feedback</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>

        {/* Feedback List */}
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Feedback Entries</h5>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Message</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackList.map((feedback, index) => (
                      <tr key={feedback.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{feedback.name}</td>
                        <td>{feedback.email}</td>
                        <td>{feedback.message}</td>
                        <td>{feedback.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAdmin;