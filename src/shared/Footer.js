import React, { Component } from 'react';
import {Container, Row,  Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube} from '@fortawesome/free-brands-svg-icons';

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const Footer = () => {
    return (
        <Container fluid className="p-0 footer-container">
            <Container className="p-0">
                <Row>
                    <Col xs="12" lg="4" className="py-4">
                        <span className="mb-0">&copy; Lalit Kumar, 2020</span>
                    </Col>
                    <Col xs="12" lg="4" className="py-4 text-center">
                        <span className="mb-0">{currentDate}&nbsp;&nbsp;{currentTime}</span>
                    </Col>
                    <Col xs="12" lg="4" className="py-4">
                        <div className="font-row d-flex justify-content-end">
                            <a className="px-2"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a className="px-2"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className="px-2"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a className="px-2"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>    
    );
}
export default Footer;