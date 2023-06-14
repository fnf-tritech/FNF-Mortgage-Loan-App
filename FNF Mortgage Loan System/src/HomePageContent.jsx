import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import homeImage from './homeImage.jpg';
import ChatMessage from './ChatMessage'; // Import the ChatMessage component
import ChatbotHome from './ChatbotHome';
import './homestyle.css'
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export function HomePageContent() {
    const [showChatbot, setShowChatbot] = useState(false);
    
     const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };
    return (
        <div>
    
        <Container fluid className="p-3">
            {/* {data && (
                <Row className="mt-4">
                    {data.map(item => (
                        <Col md={4} key={item.id}>
                            <h3>Welcome {item.username}-{item.id}</h3>
                        </Col>
                    ))}
                </Row>
            )} */}

            <Row className="align-items-center">
                <Col md={6}>
                    <h1>Welcome to Our Website!</h1>
                    <p>We are a leading provider of mortgage automation and solutions that help you streamline your workflow and reduce costs. Whether you are a lender, broker, or borrower, we have the right tools for you.</p>
                    <Button variant="primary" href="/aboutus">Learn More</Button>
                </Col>
                <Col md={6}>
                    <img src={homeImage} alt="Home page banner" width="100%" />
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>For Lenders</Card.Title>
                            <Card.Text>
                                Our platform helps you automate the entire loan origination process, from application to closing. You can manage your pipeline, track documents, communicate with borrowers, and generate reports with ease.
                            </Card.Text>
                            <Button variant="primary" href="/lenders">See Features</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>For Brokers</Card.Title>
                            <Card.Text>
                                Our platform helps you connect with multiple lenders and find the best rates and terms for your clients. You can submit applications, compare offers, negotiate fees, and close deals faster.
                            </Card.Text>
                            <Button variant="primary" href="/brokers">See Features</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>For Borrowers</Card.Title>
                            <Card.Text>
                                Our platform helps you find the best mortgage option for your needs. You can apply online, upload documents, check your status, and chat with your loan officer anytime, anywhere.
                            </Card.Text>
                            <Button variant="primary" href="/borrowers">See Features</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
         {showChatbot && <ChatMessage message={{ text: '', sender: '' }} sender="bot" status="received" />}

      {showChatbot && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            backgroundColor: '#508fd2',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            padding: '25px',
            borderRadius: '5px',
          }}
        >
          <a href="/Chatbot" className="styled-link">Chatbot</a>
          <a href="/faq" className="styled-link">FAQ</a>
          
        </div>
            )}
             <Button
        variant="secondary"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
        }}
        onClick={toggleChatbot}
      >
        Need Help ?
      </Button>
            </div>
        
    )
         
      
    }
    
   

   