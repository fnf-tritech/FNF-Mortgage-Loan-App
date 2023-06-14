import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from './Header';

function LendersPages() {
 return (
 <div>
         <Header />
         <NavBar/>
 <Container fluid className="p-3">
 <Row className="mt-4">
 <Col md={12}>
 <h1>Why Join Us as a Lender Partner?</h1>
 <p>We are a leading platform that connects you with qualified and verified brokers and borrowers. We offer you the following benefits:</p>
 <ul>
 <li>Access to a large and diverse pool of clients</li>
 <li>Reduced cost and risk of origination</li>
 <li>Increased efficiency and speed of closing</li>
 <li>Enhanced visibility and reputation</li>
 <li>Dedicated support and training</li>
 </ul>
 </Col>
 </Row>
 <Row className="mt-4">
 <Col md={6}>
 <Card>
 <Card.Body>
 <Card.Title>How It Works</Card.Title>
 <Card.Text>
 Our platform is easy and secure to use. Here are the steps to get started:
 </Card.Text>
 <ol>
 <li>Create an account and complete your profile</li>
 <li>Set your preferences and criteria</li>
 <li>Receive and review applications from brokers and borrowers</li>
 <li>Make offers and negotiate terms</li>
 <li>Close the deal and get paid</li>
 </ol>
 </Card.Body>
 </Card>
 </Col>
 <Col md={6}>
 <Card>
 <Card.Body>
 <Card.Title>What Our Partners Say</Card.Title>
 <Card.Text>
 Don't just take our word for it. Here are some testimonials from our satisfied partners:
 </Card.Text>
 <blockquote className="blockquote">
 <p>"I have been using this platform for over a year and I am very happy with the service and the results. I have increased my volume and profitability while reducing my overhead and risk."</p>
 <footer className="blockquote-footer">Divya, Chennai</footer>
 </blockquote>
 <blockquote className="blockquote">
 <p>"This platform is a great way to reach new clients and expand my market share. It saves me time and hassle and allows me to focus on delivering quality service."</p>
 <footer className="blockquote-footer">Bhuvan ,Jaipur</footer>
 </blockquote>

 </Card.Body>
 </Card>
 </Col>

 </Row>

 
 </Container>

 
 </div>

 );
}

export default LendersPages;
