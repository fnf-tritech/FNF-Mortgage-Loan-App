import React, { useState } from 'react';
import './Form.css';

const PersonalDetails = () => {
  const [Id, setId] = useState('');
  const [AppId, setAppId] = useState('');
  const [ApplicantName, setApplicantName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Nationality, setNationality] = useState('');
  const [Gender, setGender] = useState('');
  const [MaritalStatus, setMaritalStatus] = useState('');
  const [dependencies, setDependencies] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validatePersonalDetails();
    if (validationError) {
      setSubmitStatus('failure');
      return;
    }

    const formData = {
      Id,
      AppId,
      ApplicantName,
      Email,
      PhoneNumber,
      Nationality,
      Gender,
      MaritalStatus,
      dependencies,
    };

    fetch('https://mortgageautomationgroupa.azurewebsites.net/personaldetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully!', data);
        setSubmitStatus('success');
        window.location.href = '/loanpage/Identity';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setSubmitStatus('failure');
      });
  };

  const validatePersonalDetails = () => {
    if (!Id || !AppId || !ApplicantName || !Email || !PhoneNumber || !Nationality || !Gender || !MaritalStatus || !dependencies) {
      return 'Please fill in all the fields.';
    }
    return '';
  };

  return (
    <div>
      <h1>Personal Details</h1>
      {submitStatus === 'success' && <div className="success-notification">Form submitted successfully!</div>}
      {submitStatus === 'failure' && <div className="failure-notification">Failed to submit form. Please try again.</div>}
      <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input type="number" value={Id} onChange={(e) => setId(e.target.value)} required />

        <label>AppId:</label>
        <input type="text" value={AppId} onChange={(e) => setAppId(e.target.value)} required />

        <label>ApplicantName:</label>
        <input type="text" value={ApplicantName} onChange={(e) => setApplicantName(e.target.value)} required />

        <label>Email:</label>
        <input type="Email" value={Email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Contact Number:</label>
        <input type="tel" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

        <label>Nationality:</label>
        <input type="text" value={Nationality} onChange={(e) => setNationality(e.target.value)} required />

        <label>Gender:</label>
        <select value={Gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Marital Status:</label>
        <select value={MaritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} required>
          <option value="">Select marital status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>

        <label>Dependencies:</label>
        <input type="number" value={dependencies} onChange={(e) => setDependencies(e.target.value)} required />

        <div className="button-group">
          <button type="submit" onClick={handleSubmit}>Save and Continue</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
