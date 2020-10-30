import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Row,  Col} from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="p-0 footer-container">
        <Container className="p-0">
            <Row>
                <Col xs="12" lg="6" className="py-4">
                    <p className="mb-0">&copy; Lalit Kumar, 2020</p>
                </Col>
                <Col xs="12" lg="6" className="py-4">
                    
                </Col>
            </Row>
        </Container>
    </Container>    
  );
}
export default Footer;