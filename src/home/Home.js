import React, {Component} from 'react'; 
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Work from './Work';
import Skills from './Skills';
import ContactForm from './ContactForm';

function Home() {
    return (
        <div>
            <Container className="p-0 py-5">
                <Row>
                    <Col xs="12" lg={{ span: 6, offset: 3 }} className="pb-5">
                        <h2 className="text-center mb-0">I Know That <span>Good Design</span> Meant <span>Good Business</span></h2>
                    </Col>
                </Row>
                <Work />
            </Container> 
            <Container className="p-0 py-5">
                <h2 className="text-center mb-0">Skills & Experiences</h2>
                <Skills />
            </Container>    
            <Container className="p-0">
                <Form className="contact-form py-5">
                    <h2 className="text-center mb-0 pb-5">Take a coffee & chat with me</h2>
                    <ContactForm />
                </Form>
            </Container>
        </div>
    );
}
export default Home;