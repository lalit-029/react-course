import React, { Component } from 'react'; 
import {Container, Row, Col, Form} from 'react-bootstrap';
import Work from './Work';
import Skills from './Skills';
import ContactForm from './ContactForm';
import Intro from './Intro';
import PricingCard from './Pricing';
class Home extends Component{
    render(){
        return (
            <div>
                <Container className="banner-container">
                    <Row>
                        <Intro />
                    </Row>
                </Container>
                <Container className="p-0 py-5">
                    <Row>
                        <Col xs="12" lg={{ span: 6, offset: 3 }} className="pb-5">
                            <h2 className="text-center mb-0">I Know That <span>Good Design</span> Meant <span>Good Business</span></h2>
                        </Col>
                    </Row>
                    <Work />
                </Container> 
                <Container className="p-0 py-5">
                    <h2 className="text-center mb-0 pb-5">Skills & Experiences</h2>
                    <Skills />
                </Container>
                <Container className="py-5 px-0">
                    <Row>
                        <h2 className="text-center mb-5">Pricing</h2>
                        <Col xs="12" lg="3" className="py-5">
                            <PricingCard imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title="Logo Design" description="A logo for your product" price="$5" />
                        </Col>
                        <Col xs="12" lg="3" className="py-5">
                            <PricingCard imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title="Web Design" description="A website for your product" price="$13" />
                        </Col>
                        <Col xs="12" lg="3" className="py-5">
                            <PricingCard imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title="UI Design" description="A prototype for your product" price="$13" />
                        </Col>
                        <Col xs="12" lg="3" className="py-5">
                            <PricingCard imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title="UX Design" description="A experience for your product" price="$15" />
                        </Col>
                    </Row>
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
}
        
export default Home;