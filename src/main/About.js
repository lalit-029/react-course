import React, { Component } from 'react'; 
import {Row, Col, Container} from 'react-bootstrap';
import Skills from '../home/Skills';
import Intro from '../home/Intro';
const About = () => {
    return (
        <>
            <Container className="banner-container">
                <Row>
                    <Intro />
                </Row>
            </Container>
            <Container className="p-0 py-5">
                <h2 className="text-center mb-0 pb-5">Skills & Experiences</h2>
                <Skills />
            </Container>
        </>
    );
}
export default About;