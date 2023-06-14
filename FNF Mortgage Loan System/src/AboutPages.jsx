import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from './Header';

function AboutPages() {
 return (
     <div>
<Header/>
 <NavBar />
 <Container fluid className="p-3">
 <Row className="mt-4">
 <Col md={12}>
 <h1>About Us</h1>
 <p>We are a team of passionate and experienced professionals who are dedicated to providing the best mortgage automation and solutions for our clients. We believe that technology can transform the way people buy and sell homes, and we are committed to making it accessible and affordable for everyone.</p>
 </Col>
 </Row>
 <Row className="mt-4">
 <Col md={6}>
 <Card>
 <Card.Body>
 <Card.Title>Our Mission</Card.Title>
 <Card.Text>
 Our mission is to empower our clients with the tools and resources they need to achieve their homeownership goals. We aim to simplify and streamline the mortgage process, reduce costs and errors, and improve customer satisfaction and loyalty.
 </Card.Text>
 </Card.Body>
 </Card>
 </Col>
 <Col md={6}>
 <Card>
 <Card.Body>
 <Card.Title>Our Vision</Card.Title>
 <Card.Text>
 Our vision is to become the leading platform for mortgage automation and solutions in the industry. We aspire to create a network of trusted and reliable partners who share our values and vision. We strive to innovate and improve our products and services to meet the changing needs and expectations of our clients.
 </Card.Text>
 </Card.Body>
 </Card>
 </Col>

 </Row>

 
 </Container>

 
 </div>

 );
}

export default AboutPages;
