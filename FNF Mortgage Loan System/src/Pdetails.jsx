import React, { useState } from 'react';

const CreditCard = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      creditCardNumber,
      expiryDate,
      nameOnCard,
    };

    console.log('Form Data:', formData);

    // Reset form fields
    setCreditCardNumber('');
    setExpiryDate('');
    setNameOnCard('');
  };

  return (
    <div className="container">
      <h1>Credit Card Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Credit Card Number:</label>
        <input
          type="number"
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
          required
        />

        <label>Expiry Date:</label>
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />

        <label>Name on Card:</label>
        <input
          type="text"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default CreditCard