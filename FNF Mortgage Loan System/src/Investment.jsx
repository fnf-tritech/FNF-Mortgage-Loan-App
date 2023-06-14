import React, { useState, useEffect } from 'react';
import './Form.css';

const Investment = () => {
  const [id, setId] = useState('');
  const [appId, setAppId] = useState(''); // New state for AppId
  const [investmentType, setInvestmentType] = useState('');
  const [amount, setAmount] = useState('');

  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('investmentFormData');
    if (storedFormData) {
      const { id,appId, investmentType, amount  } = JSON.parse(storedFormData);
      setId(id);
      setAppId(appId); 
      setInvestmentType(investmentType);
      setAmount(amount);
      // Set the value of AppId from local storage
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      id,
      appId, // Include AppId in the form data
      investmentType,
      amount,

    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/investment', {
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
        
        // Regenerate the page or perform any necessary actions
        window.location.href = '/loanpage/propertydetails';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setError('Form submission failed!');
      });
  };

  const handlePrevious = () => {
    // Perform previous action
    // For demonstration purposes, I'm simply logging a message here
     window.location.href = '/loanpage/loan';
  };

  const handleFormChange = () => {
     
    const formData = {
      id,
      investmentType,
      amount,
      appId, // Include AppId in the form data
    };
    localStorage.setItem('investmentFormData', JSON.stringify(formData));
  };

  return (
    <div>
      <h1>Investment</h1>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
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

        <label>Investment Type:</label>
        <input
          type="text"
          value={investmentType}
          onChange={(e) => setInvestmentType(e.target.value)}
          required
        />

        <label>Amount:</label>
        <input
          type="number"
          
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />


         <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" onClick={handlePrevious}>
            Previous
          </button>
          <button type="submit" onClick={handleSubmit}>Save &amp; Submit</button>
        </div>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {notification && <div style={{ color: 'green' }}>{notification}</div>}
    </div>
  );
};

export default Investment;
