import React, { useState, useEffect } from 'react';
import './Form.css';

const Address = () => {
  const [appId, setAppId] = useState('');
  const [id, setId] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('addressFormData');
    if (storedFormData) {
      const {
        appId,
        id,
        currentAddress,
        permanentAddress,
        documentType,
        documentNumber,
      } = JSON.parse(storedFormData);
      setAppId(appId);
      setId(id);
      setCurrentAddress(currentAddress);
      setPermanentAddress(permanentAddress);
      setDocumentType(documentType);
      setDocumentNumber(documentNumber);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationError = validateAddress();
    if (validationError) {
      setError(validationError);
      return;
    }

    const formData = {
      appId,
      id,
      currentAddress,
      permanentAddress,
      documentType,
      documentNumber,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/address', {
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
        localStorage.removeItem('addressFormData');
        window.location.href = '/loanpage/employee';
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
    window.location.href = '/loanpage/employee';
  };

  const handlePrevious = () => {
    // Perform previous action

    // Redirect to the previous page or perform any necessary actions
    // For demonstration purposes, I'm simply logging a message here
    window.location.href = '/loanpage/income';
  };

  const handleFormChange = () => {
    const formData = {
      appId,
      id,
      currentAddress,
      permanentAddress,
      documentType,
      documentNumber,
    };
    localStorage.setItem('addressFormData', JSON.stringify(formData));
  };

  const validateAddress = () => {
    if (
      !appId ||
      !id ||
      !currentAddress ||
      !permanentAddress ||
      !documentType ||
      !documentNumber
    ) {
      return 'Please fill in all the fields.';
    }
    return '';
  };

  return (
    <div>
      <h1>Address Details</h1>
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

        <label>Current Address:</label>
        <input
          type="text"
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
          required
        />

        <label>Permanent Address:</label>
        <input
          type="text"
          value={permanentAddress}
          onChange={(e) => setPermanentAddress(e.target.value)}
          required
        />

        <label>Supporting Document Type:</label>
        <input
          type="text"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
          required
        />

        <label>Supporting Document Number:</label>
        <input
          type="text"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          required
        />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

export default Address;
