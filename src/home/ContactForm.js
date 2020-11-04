import React, { Component } from 'react'; 
import {Row, Col, Button, Form} from 'react-bootstrap';

const ContactForm = () => {
    return(
        <div className="pb-5">
        <Row className="mx-0 py-5 contact-link-row">
            <Col xs="12" lg={{ span: 5, offset: 1 }}>
                <a className="d-flex align-items-center justify-content-center contact-links">
                    <img src="text.png" alt="contact" />
                    <h5 className="mb-0 ">Lrj0496@gmail.com</h5>
                </a>
            </Col>  
            <Col xs="12" lg="5">
                <a className="d-flex align-items-center justify-content-center contact-links">
                    <img src="phone.png" alt="contact" />
                    <h5 className="mb-0 ">(+91)&nbsp;9582351011</h5>
                </a>
            </Col>
        </Row>
        <Row className="mx-0 pt-5">
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
    </div>
    ); 
}
export default ContactForm;