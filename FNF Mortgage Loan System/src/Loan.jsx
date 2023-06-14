import React, { useState, useEffect } from 'react';
import './Form.css';

const Loan = () => {
  const [id, setId] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [appId, setAppId] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('loanFormData');
    if (storedFormData) {
      const { id, loanType, loanAmount, appId } = JSON.parse(storedFormData);
      setId(id);
      setLoanType(loanType);
      setLoanAmount(loanAmount);
      setAppId(appId);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      loanType,
      loanAmount,
      appId,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/loan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully!', data);
        setNotification('Form submitted successfully!');
        localStorage.removeItem('loanFormData');
        // Redirect to the next page or perform any necessary actions
        window.location.href = '/loanpage/Investment';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setError('Form submission failed!');
      });
  };

  const handlePrevious = () => {
    // Perform previous action
    // For demonstration purposes, I'm simply logging a message here
    window.location.href = '/loanpage/Employee';
  };

  const handleFormChange = () => {
    const formData = {
      id,
      loanType,
      loanAmount,
      appId,
    };
    localStorage.setItem('loanFormData', JSON.stringify(formData));
  };

  return (
    <div>
      <h1>Existing Loan Details</h1>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Existing Loan Type:</label>
        <input
          type="text"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          required
        />

        <label>Existing Loan Amount:</label>
        <input
          type="number"
          
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />

        <label>App ID:</label>
        <input
          type="text"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" onClick={handlePrevious}>
            Previous
          </button>
          <button type="submit" onClick={handleSubmit}>Save &amp; Continue</button>
        </div>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {notification && <div style={{ color: 'green' }}>{notification}</div>}
    </div>
  );
};

export default Loan;
