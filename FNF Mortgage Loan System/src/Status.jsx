import React, { useEffect, useState } from 'react';
import './index.css';
import NavBar from './NavBar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from './Header';
import { Link } from 'react-router-dom';

  
  function generateRandomId() {

    return Math.floor(Math.random() * 100000000);

  };
  const  ApplyNow=()=> {
    localStorage.setItem("appID",generateRandomId())
   
     window.location.href= '/loanpage/personaldetails';
}
  


const Status = () => {
  const [loanStatus, setLoanStatus] = useState('Not Applied');
  const [appStatus, setappStatus] = useState('');

  useEffect(() => {
    // eslint-disable-next-line
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://mortgageautomationgroupa.azurewebsites.net/Application/${localStorage.getItem("appID")}`);
      const data = await response.json();
     
      

      if (data.appStatus) {
        setLoanStatus('Approved');
      } else {
        setLoanStatus('Rejected');
      }

      setappStatus(data.appStatus);
    } catch (error) {
      console.error('Error fetching loan data:', error);
    }
  };

  return (
    <div>
      <Header />
      <NavBar />

      <Container>
        <h1 className="title text-center">Loan Status</h1>
        <Row>
          <Col md={6}>
            <Card className="card mb-4">
              <Card.Body>
                <Card.Title className="card-title">Loan Details</Card.Title>
                <hr className="divider" />
                <p>
                  <strong>Loan Number: {localStorage.getItem("appID")}</strong> {appStatus}
                </p>
                {(
                  <p>
                     <strong>Status:</strong> <span className="text-success">{loanStatus}</span>
                  </p>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            {!appStatus && (
              <Card className="card mb-4">
                <Card.Body>
                  <Card.Title className="card-title">Apply for Another Loan</Card.Title>
                  <hr className="divider" />
                  <Link to="/loanpage/personaldetails">
                    <Button onClick={ApplyNow} variant="primary">Apply For Another Loan</Button>
                  </Link>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Status;
