import React, { useState, useEffect } from 'react';
import './Form.css';

const Income = () => {
  const [appId, setAppId] = useState('');
  const [id, setId] = useState('');
  const [primaryIncomeType, setPrimaryIncomeType] = useState('');
  const [primaryIncome, setPrimaryIncome] = useState('');
  const [secondaryIncomeType, setSecondaryIncomeType] = useState('');
  const [secondaryIncome, setSecondaryIncome] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('incomeFormData');
    if (storedFormData) {
      const {
        appId,
        id,
        primaryIncomeType,
        primaryIncome,
        secondaryIncomeType,
        secondaryIncome,
        documentNumber,
      } = JSON.parse(storedFormData);
      setAppId(appId);
      setId(id);
      setPrimaryIncomeType(primaryIncomeType);
      setPrimaryIncome(primaryIncome);
      setSecondaryIncomeType(secondaryIncomeType);
      setSecondaryIncome(secondaryIncome);
      setDocumentNumber(documentNumber);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validateIncome();
    if (validationError) {
      setError(validationError);
      return;
    }

    const formData = {
      appId,
      id,
      primaryIncomeType,
      primaryIncome,
      secondaryIncomeType,
      secondaryIncome,
      documentNumber,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/Income', {
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
        localStorage.removeItem('incomeFormData');
        // Regenerate the page or perform any necessary actions
        window.location.href = '/loanpage/Address';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setError('Form submission failed!');
      });
  };
// eslint-disable-next-line
  const handleSaveAndContinue = () => {
    // Save the form data to local database

    // Redirect to the next page or perform any necessary actions
    window.location.href = '/loanpage/Address';
  };

  const handlePrevious = () => {
    // Perform previous action
    // For demonstration purposes, I'm simply logging a message here
    window.location.href = '/loanpage/Assets';
  };

  const handleFormChange = () => {
    const formData = {
      appId,
      id,
      primaryIncomeType,
      primaryIncome,
      secondaryIncomeType,
      secondaryIncome,
      documentNumber,
    };
    localStorage.setItem('incomeFormData', JSON.stringify(formData));
  };

  const validateIncome = () => {
    if (!appId || !id || !primaryIncomeType || !primaryIncome || !secondaryIncomeType || !secondaryIncome || !documentNumber) {
      return 'Please fill in all the fields.';
    }
    return '';
  };

  return (
    <div>
      <h1>Income Form</h1>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <label>App ID:</label>
        <input
          type="text"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
        />

        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Primary Income Type:</label>
        <input
          type="text"
          value={primaryIncomeType}
          onChange={(e) => setPrimaryIncomeType(e.target.value)}
          required
        />

        <label>Primary Income:</label>
        <input
          type="number"
          
          value={primaryIncome}
          onChange={(e) => setPrimaryIncome(e.target.value)}
          required
        />

        <label>Secondary Income Type:</label>
        <input
          type="text"
          value={secondaryIncomeType}
          onChange={(e) => setSecondaryIncomeType(e.target.value)}
          required
        />

        <label>Secondary Income:</label>
        <input
          type="number"
          
          value={secondaryIncome}
          onChange={(e) => setSecondaryIncome(e.target.value)}
          required
        />

        <label>Document Number:</label>
        <input
          type="text"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          required
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={handlePrevious}>
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

export default Income;
