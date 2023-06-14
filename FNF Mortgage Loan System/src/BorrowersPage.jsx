import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from './Header';

function BorrowersPage() {
 return (
 <div>
         <Header />
         <NavBar/>
 <Container fluid className="p-3">
 <Row className="mt-4">
 <Col md={12}>
 <h1>Why Choose Us as Your Mortgage Partner?</h1>
 <p>We are a trusted and reliable platform that helps you find the best mortgage option for your needs. We offer you the following benefits:</p>
 <ul>
 <li>Access to hundreds of lenders and products</li>
 <li>Easy and fast online application process</li>
 <li>Real-time updates and communication</li>
 <li>Personalized and professional service</li>
 <li>Flexible and transparent terms and fees</li>
 </ul>
 </Col>
 </Row>
 <Row className="mt-4">
 <Col md={6}>
 <Card>
 <Card.Body>
 <Card.Title>How It Works</Card.Title>
 <Card.Text>
 Our platform is simple and convenient to use. Here are the steps to get started:
 </Card.Text>
 <ol>
 <li>Create an account and complete your profile</li>
 <li>Answer some questions about your income, assets, and credit</li>
 <li>Upload your documents and verify your identity</li>
 <li>Receive and compare offers from multiple lenders</li>
 <li>Select the best offer and sign the contract</li>
 </ol>
 </Card.Body>
 </Card>
 </Col>
 <Col md={6}>
 <Card>
 <Card.Body>
 <Card.Title>What Our Customers Say</Card.Title>
 <Card.Text>
 Don't just take our word for it. Here are some testimonials from our happy customers:
 </Card.Text>
 <blockquote className="blockquote">
 <p>"I was amazed by how easy and fast it was to apply for a mortgage on this platform. I got a great rate and a smooth closing. I highly recommend this platform to anyone looking for a mortgage."</p>
 <footer className="blockquote-footer">Gopal , Bengaluru</footer>
 </blockquote>
 <blockquote className="blockquote">
 <p>"This platform is a lifesaver for me. I had a bad credit history and I was struggling to find a lender who would approve me. This platform matched me with a lender who offered me a reasonable deal and helped me buy my dream home."</p>
 <footer className="blockquote-footer">Vinod ,Pune</footer>
 </blockquote>

 </Card.Body>
 </Card>
 </Col>

 </Row>

 
 </Container>

 
 </div>

 );
}

export default BorrowersPage;
