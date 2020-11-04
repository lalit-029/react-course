import React, { Component } from 'react'; 
import {Row, Button, Col, Container} from 'react-bootstrap';

const Resume = () => {
    return (
        <Container className="px-0 resume-container">
            <Row>
                <Col xs="12" lg={{ span: 4, offset: 4 }} className="text-center">
                    <h3>Download my Curriculum Vitae</h3>
                    <Button variant="primary" className="my-2">Download Now!</Button>
                    <p className="mt-5"><small>For any further queries please contact me at <span>lalitkr.uiux@gmail.com</span></small></p>
                </Col>
            </Row>
        </Container>
    );
}
export default Resume;