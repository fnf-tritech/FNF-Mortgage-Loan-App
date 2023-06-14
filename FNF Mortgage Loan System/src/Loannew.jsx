import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import './newloan.css'

const LoanComponent = () => {
  const navigate = useNavigate();

  const handleNewLoanClick = () => {
    // Redirect to the new loan page
    navigate('/loanpage/personaldetails');
  };

  const handleViewLoanClick = () => {
    // Redirect to the view existing loan page
    navigate('/status');
  };

  return (
      <div>
          <Header />
          <NavBar />
          <br/>
          <button className="loan-button" onClick={handleNewLoanClick}>New Loan</button>
          <br/>
      <button className="loan-button" onClick={handleViewLoanClick}>View Existing Loan</button>
    </div>
  );
};

export default LoanComponent;
