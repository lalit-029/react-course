import React, { Component } from 'react'; 
import {Row, Col, Container} from 'react-bootstrap';

const Services = () => {
    return (
        <Container className="px-0">
            <Row>
                <Col xs="12" lg={{ span: 6, offset: 3 }} className="py-5">
                    <h2 className="text-center mb-0">I Know That <span>Good Design</span> Meant <span>Good Business</span></h2>
                </Col>
            </Row>
            <Row className="work-row">
                <Col xs="12" lg="4" className="p-5 work-card">
                    <img src="animation.png" className="mb-5" alt="services"/>
                    <h4 className="mb-4">Animation</h4>
                    <p>I blew a little magic to make static designs work without coding. Yah! It's Animation.</p>
                </Col>
                <Col xs="12" lg="4" className="p-5 work-card">
                    <img src="interaction.jpg" className="mb-5 interaction" alt="services"/>
                    <h4 className="mb-4">Interaction</h4>
                    <p>Optimized UI/UX for digital products like desktop, mobile, etc. Help business growth more.</p>
                </Col>
                <Col xs="12" lg="4" className="p-5 work-card">
                    <img src="illustration.jpg" className="mb-5 illustration" alt="services"/>
                    <h4 className="mb-4">Illustration</h4>
                    <p>Design things abstract become visible with a look impressive.</p>
                </Col>
            </Row>
        </Container>
    );
}
export default Services;