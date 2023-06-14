import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card} from 'react-bootstrap';
import Header from './Header';

function BrokersPages() {
 return (
 <div>
         <Header />
         <NavBar/>
 <Container fluid className="p-3">
 <Row className="mt-4">
 <Col md={12}>
 <h1>Why Choose Us as Your Broker Partner?</h1>
 <p>We are a trusted and reliable platform that connects you with hundreds of lenders across the country. We offer you the following benefits:</p>
 <ul>
 <li>Access to the best rates and terms for your clients</li>
 <li>Easy and fast application process</li>
 <li>Real-time updates and communication</li>
 <li>Flexible and transparent fee structure</li>
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
 Our platform is simple and intuitive to use. Here are the steps to get started:
 </Card.Text>
 <ol>
 <li>Create an account and complete your profile</li>
 <li>Search for lenders and compare offers</li>
 <li>Select the best offer and submit your application</li>
 <li>Track your status and communicate with the lender</li>
 <li>Close the deal and get paid</li>
 </ol>
 </Card.Body>
 </Card>
 </Col>
 <Col md={6}>
 <Card>
 <Card.Body>
 <Card.Title>What Our Clients Say</Card.Title>
 <Card.Text>
 Don't just take our word for it. Here are some testimonials from our satisfied clients:
 </Card.Text>
 <blockquote className="blockquote">
 <p>"I have been using this platform for over a year and I am very impressed with the service and the results. I have closed more deals and earned more commissions than ever before."</p>
 <footer className="blockquote-footer">Rahul, Dehli</footer>
 </blockquote>
 <blockquote className="blockquote">
 <p>"This platform is a game-changer for brokers. It saves me time and money and allows me to focus on building relationships with my clients."</p>
 <footer className="blockquote-footer">Ajay,Hydrabad</footer>
 </blockquote>

 </Card.Body>
 </Card>
 </Col>

 </Row>

 
 </Container>

 
 </div>

 );
}

export default BrokersPages;
