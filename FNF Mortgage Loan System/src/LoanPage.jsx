import React from 'react';
import NavBar from './NavBar';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

function LoanPage() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <br/>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white font-weight-bold">Loan Application Requirements</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link to="personaldetails" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Personal Details
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link to="identity" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Identity Proof Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="creditcard" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Credit Card Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="assets" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Asset Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="income" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Income Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="address" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Address Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="employee" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Employer Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="loan" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Existing Loan Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="investment" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Investment Details
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link to="propertydetails" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Property Details
                  </Link></li>






              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>

  );
}

export default LoanPage;
