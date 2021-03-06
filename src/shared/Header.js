import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <Container fluid className="p-0">
            <Container className="p-0">
                <Navbar collapseOnSelect expand="lg" className="p-3">
                <Navbar.Brand href="/" className="p-lg-0">Lalit <span>Kumar</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-xs-left" href="/service">Services</Nav.Link>
                        <Nav.Link className="text-xs-left" href="/resume">Resume</Nav.Link>
                        <Nav.Link className="text-xs-left" href="/about">About Me</Nav.Link>
                        <Nav.Link className="text-xs-left" href="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );    
}    
export default Header;