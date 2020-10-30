import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from 'react-bootstrap';

function Header() {
  return (
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
    );    
}    
export default Header;