import React, { useState, useEffect } from 'react';
import './Form.css';

const Identity = () => {
  const [id, setId] = useState('');
  const [appId, setAppId] = useState('');
  const [identityType, setIdentityType] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('identityFormData');
    if (storedFormData) {
      const { id, appId, identityType, identityNumber } = JSON.parse(storedFormData);
      setId(id);
      setAppId(appId);
      setIdentityType(identityType);
      setIdentityNumber(identityNumber);
    }
  }, []);



  const handlePrevious = () => {
    // Redirect to the previous page or perform any necessary actions
    // For demonstration purposes, I'm simply logging a message here
    window.location.href = '/loanpage/PersonalDetails';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validateIdentityNumber();
    if (validationError) {
      setError(validationError);
      return;
    }

    const formData = {
      id,
      appId,
      identityType,
      identityNumber,
    };

    // Save the form data to local storage
    localStorage.setItem('identityFormData', JSON.stringify(formData));

    fetch('https://mortgageautomationgroupa.azurewebsites.net/Identity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as desired
        console.log(data);
        setNotification('Form submitted successfully.');

        // Remove the stored form data from local storage
        localStorage.removeItem('identityFormData');

        // Redirect to the next page or perform any necessary actions
        window.location.href = '/loanpage/creditcard';
      })
      .catch((error) => {
        // Handle any error that occurs during the request
        console.error('Error:', error);
        setNotification('Failed submitted SuccessFully.');
        window.location.href = '/loanpage/creditcard';
      });
  };

  const validateIdentityNumber = () => {
    if (identityType === 'Aadhaar' && identityNumber.length !== 12) {
      return 'Identity Number must be a 12-digit number for Aadhaar.';
    }
    if (identityType === 'Pancard' && identityNumber.length !== 10) {
      return 'Identity Number must be a 10-character string for Pancard.';
    }
    if (identityType === 'Drivinglicence' && identityNumber.length !== 10) {
      return 'Identity Number must be a 10-character string for Driving Licence.';
    }
    return '';
  };

  const handleFormChange = () => {
    // Update the form data stored in localStorage
    const formData = {
      id,
      appId,
      identityType,
      identityNumber,
    };
    localStorage.setItem('identityFormData', JSON.stringify(formData));
  };

  return (
    <div>
      <h1>Identity Details</h1>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <label>Id</label>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setError('');
          }}
          required
        />
        <label>App ID</label>
        <input
          type="text"
          value={appId}
          onChange={(e) => {
            setAppId(e.target.value);
            setError('');
          }}
          required
        />
        <label>Identity Type</label>
        <select
          value={identityType}
          onChange={(e) => {
            setIdentityType(e.target.value);
            setError('');
          }}
          required
        >
          <option value="">Select an option</option>
          <option value="Aadhaar">Aadhaar</option>
          <option value="Pancard">Pancard</option>
          <option value="Drivinglicence">Driving Licence</option>
        </select>
        <label>Identity Number</label>
        <input
          type="text"
          value={identityNumber}
          onChange={(e) => {
            setIdentityNumber(e.target.value);
            setError('');
          }}
          required
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {notification && <div style={{ color: 'green' }}>{notification}</div>}
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

export default Identity;
