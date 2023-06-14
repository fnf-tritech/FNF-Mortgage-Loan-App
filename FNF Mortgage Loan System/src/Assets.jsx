import React, { useState, useEffect } from 'react';

const Assets = () => {
  const [id, setId] = useState('');
  const [assetType, setAssetType] = useState('');
  const [assetValue, setAssetValue] = useState('');
  const [appId, setAppId] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('assetFormData');
    if (storedFormData) {
      const { id, assetType, assetValue, appId } = JSON.parse(storedFormData);
      setId(id);
      setAssetType(assetType);
      setAssetValue(assetValue);
      setAppId(appId);
    }
  }, []);
  // eslint-disable-next-line
  const handleSaveAndContinue = () => {
    const validationError = validateAssetValue();
    if (validationError) {
      setError(validationError);
      return;
    }

    handleSubmit(new Event('submit'));

    // Redirect to the next page or perform any necessary actions
    window.location.href = '/loanpage/income';
  };

  const handlePrevious = () => {
    // Redirect to the previous page or perform any necessary actions
    // For demonstration purposes, I'm simply logging a message here
    window.location.href = '/loanpage/creditcard';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validateAssetValue();
    if (validationError) {
      setError(validationError);
      return;
    }

    const formData = {
      id,
      assetType,
      assetValue,
      appId,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/asset', {
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
        localStorage.removeItem('assetFormData');
        // Regenerate the page or perform any necessary actions
        window.location.href = '/loanpage/income';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setError('Form submission failed!');
      });
  };

  const validateAssetValue = () => {
    if (isNaN(assetValue) || parseFloat(assetValue) <= 0) {
      return 'Asset Value must be a positive number.';
    }
    return '';
  };

  const handleFormChange = () => {
    const formData = {
      id,
      assetType,
      assetValue,
      appId,
    };
    localStorage.setItem('assetFormData', JSON.stringify(formData));
  };

  return (
    <div>
      <h1>Assets Form</h1>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label>Asset Type:</label>
        <input
          type="text"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
          required
        />

        <label>Asset Value:</label>
        <input
          type="number"
          
          value={assetValue}
          onChange={(e) => setAssetValue(e.target.value)}
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
          <button type="submit" onClick={handleSubmit}>
            Save &amp; Continue
          </button>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {notification && <div style={{ color: 'green' }}>{notification}</div>}
      </form>
    </div>
  );
};

export default Assets;
