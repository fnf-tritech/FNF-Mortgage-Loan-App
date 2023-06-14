import React, { useState } from 'react';
import './Form.css';

const PropertyDetails = () => {
  const [id, setId] = useState('');
  const [appId, setAppId] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [expectedLoan, setExpectedLoan] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [cibilScore, setCibilScore] = useState('');
  const [lawyerStatus, setLawyerStatus] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

 const handleSubmit = (event) => {
  event.preventDefault();

  // Perform submit action
  const formData = {
    id,
    appId,
    propertyValue,
    expectedLoan,
    propertyAddress,
    cibilScore,
    lawyerStatus,
    dateApplied,
  };

  fetch('https://mortgageautomationgroupa.azurewebsites.net/property', {
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

      // Store the appId as a local variable named loanNumber
      const loanNumber = data.appId;

      // Redirect to the status page and pass the loanNumber as a parameter
      window.location.href = `/status?loanNumber=${loanNumber}`;
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      setError('Form submission failed!');
    });
};

  const handlePrevious = () => {
    // Redirect to the previous page or perform any necessary actions
    // For demonstration purposes, I'm simply logging a message here
    window.location.href = '/loanpage/Investmet';
  };

  return (
    <div>
      <h1>Property Details</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {notification && <div style={{ color: 'green' }}>{notification}</div>}
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>App ID:</label>
        <input
          type="number"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
        />

        <label>Property Value:</label>
        <input
          type="number"
          
          value={propertyValue}
          onChange={(e) => setPropertyValue(e.target.value)}
          required
        />

        <label>Expected Loan:</label>
        <input
          type="number"
          
          value={expectedLoan}
          onChange={(e) => setExpectedLoan(e.target.value)}
          required
        />

        <label>Property Address:</label>
        <input
          type="text"
          value={propertyAddress}
          onChange={(e) => setPropertyAddress(e.target.value)}
          required
        />

        <label>Cibil Score:</label>
        <input
          type="number"
          value={cibilScore}
          onChange={(e) => setCibilScore(e.target.value)}
          required
        />

        <label>Lawyer Status:</label>
        <input
          type="text"
          value={lawyerStatus}
          onChange={(e) => setLawyerStatus(e.target.value)}
          required
        />

        <label>Date Applied:</label>
        <input
          type="text"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
          required
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
          <button type="submit" onClick={handleSubmit}>
            Save &amp; Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyDetails;
