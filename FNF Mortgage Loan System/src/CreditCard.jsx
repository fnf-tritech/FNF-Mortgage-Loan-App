import React, { useState, useEffect } from 'react';
import './CreditCard.css';

const CreditCard = () => {
  const [cards, setCards] = useState([]);
  const [id, setId] = useState('');
  const [appId, setAppId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireyDate, setExpiryDate] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!appId || !cardNumber || !expireyDate) {
      setError('Please fill in all the required fields.');
      return;
    }

    const formData = {
      id,
      appId,
      cardNumber,
      expireyDate,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/card', {
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
        window.location.href = 'Assets';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setError('Form submission failed!');
      });

    setCards([...cards, formData]);

    setId('');
    setAppId('');
    setCardNumber('');
    setExpiryDate('');

    localStorage.setItem('cards', JSON.stringify([...cards, formData]));

    setNotification('Form submitted successfully!');
  };
  // eslint-disable-next-line
  const handleSaveAndContinue = () => {
    // Save the form data to local database

    // Redirect to the next page or perform any necessary actions
    window.location.href = 'Assets';
  };

  const handlePrevious = () => {
    window.location.href = 'Identity';
  };

  const handleAddAnotherCard = () => {
    const newCard = {
      id,
      appId,
      cardNumber,
      expireyDate,
    };

    setCards([...cards, newCard]);

    setId('');
    setAppId('');
    setCardNumber('');
    setExpiryDate('');
  };

  return (
    <div>
      <h1>Credit Card Form</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {notification && <div style={{ color: 'green' }}>{notification}</div>}
      <form onSubmit={handleSubmit}>
        <label>ID Number:</label>
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

        <label>Credit Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label>Expiry Date:</label>
        <input
          type="text"
          value={expireyDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />

        <div>
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
          <button type="submit" onClick={handleSubmit}>
            Save &amp; Continue
          </button>
          <button type="button" onClick={handleAddAnotherCard}>
            Add Another Card
          </button>
        </div>
      </form>
      {cards.length > 0 && (
        <div className="stored-cards">
          <h3>Stored Cards</h3>
          <ul>
            {cards.map((card, index) => (
              <li key={index}>
                Card {index + 1}: ID - {card.id}, App ID - {card.appId}, Card Number - {card.cardNumber}, Expiry Date - {card.expireyDate}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
