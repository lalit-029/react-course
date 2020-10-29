import React, {Component} from 'react';
import './App.scss'; 
import Navbar from 'react-bootstrap/Navbar';
import {Container, Row, Col, Button, Form, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Container className="p-0">
          <Navbar collapseOnSelect expand="lg" className="p-3">
            <Navbar.Brand href="#home" className="p-lg-0">Lalit <span>Kumar</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="text-xs-left" href="#features">Services</Nav.Link>
                <Nav.Link className="text-xs-left" href="#pricing">Resume</Nav.Link>
                <Nav.Link className="text-xs-left" href="#pricing">About Me</Nav.Link>
                <Nav.Link className="text-xs-left" href="#pricing">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
      <Container className="p-0 py-5">
        <Row>
          <Col xs="12" lg={{ span: 6, offset: 3 }} className="pb-5">
            <h2 className="text-center mb-0">I Know That <span>Good Design</span> Meant <span>Good Business</span></h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="4" className="p-5">
            <img src="text.png" className="mb-5" />
            <h4 className="mb-4">Animation</h4>
            <p>I blew a little magic to make static designs work without coding. Yah! It's Animation.</p>
          </Col>
          <Col xs="12" lg="4" className="p-5">
            <img src="text.png" className="mb-5" />
            <h4 className="mb-4">Interaction</h4>
            <p>Optimized UI/UX for digital products like desktop, mobile, etc. Help business growth more.</p>
          </Col>
          <Col xs="12" lg="4" className="p-5">
            <img src="text.png" className="mb-5" />
            <h4 className="mb-4">Illustration</h4>
            <p>Design things abstract become visible with a look impressive.</p>
          </Col>
        </Row>
      </Container> 
      <Container className="p-0 py-5">
        <h2 className="text-center mb-0">Skills & Experiences</h2>
        <Row>
          <Col xs="12" lg={{ span: 6, offset: 3 }}>
            
          </Col>
        </Row>
      </Container>    
      <Container className="p-0">
        <Form className="contact-form py-5">
          <h2 className="text-center mb-0">Take a coffee & chat with me</h2>
          <Row className="mx-0 py-5 contact-link-row">
            <Col xs="12" lg={{ span: 5, offset: 1 }} className="mb-3">
              <a className="d-flex align-items-center justify-content-center contact-links">
                <img src="text.png" />
                <h5 className="mb-0 ">Lrj0496@gmail.com</h5>
              </a>
            </Col>  
            <Col xs="12" lg="5" className="mb-3">
              <a className="d-flex align-items-center justify-content-center contact-links">
                <img src="phone.png" />
                <h5 className="mb-0 ">(+91)&nbsp;9582351011</h5>
              </a>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col xs="12" lg="4">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
            <Col xs="12" lg="4">
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
            <Col xs="12" lg="4">
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select">
                  <option></option>  
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Your message here..</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-0">
            <Button variant="link" className="mx-auto mt-5" type="submit">
              Send Message
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
