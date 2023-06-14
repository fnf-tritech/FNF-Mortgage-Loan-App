import React, { useState } from 'react';
import './Form.css';

const Employee = () => {
  const [id, setId] = useState('');
  const [EmployeerName, setEmployeerName] = useState('');
  const [OrganisationName, setOrganisationName] = useState('');
  const [appId, setAppId] = useState('');
  // eslint-disable-next-line
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id,
      EmployeerName,
      OrganisationName,
      appId,
    };
    fetch('https://mortgageautomationgroupa.azurewebsites.net/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully!', data);
        setNotification('Form submitted successfully.');
        handleSubmit(new Event('submit'));
        window.location.href = '/loanpage/Loan';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setNotification('Form submission failed.');
      });
  };
// eslint-disable-next-line
  const handleSaveAndContinue = () => {
    // Save the form data to local database

    // Redirect to the next page or perform any necessary actions
    window.location.href = '/loanpage/Loan';
  };

  const handlePrevious = () => {
    // Redirect to the previous page or perform any necessary actions
    // For demonstration purposes, I'm simply logging a message here
    window.location.href = '/loanpage/Address';
  };

  return (
    <div>
      <h1>Employer Details Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Employer Name:</label>
        <input
          type="text"
          value={EmployeerName}
          onChange={(e) => setEmployeerName(e.target.value)}
          required
        />

        <label>Employer Phone:</label>
        <textarea
          value={OrganisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
          required
        ></textarea>

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
          <button type="submit" onClick={handleSubmit}>
            Save &amp; Continue
          </button>
        </div>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {notification && <div style={{ color: 'green' }}>{notification}</div>}
    </div>
  );
};

export default Employee;
