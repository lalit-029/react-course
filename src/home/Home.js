import React, { Component } from 'react'; 
import {Container, Row, Col, Form} from 'react-bootstrap';
import Work from './Work';
import Skills from './Skills';
import ContactForm from './ContactForm';
import Intro from './Intro';
import PricingCard from './Pricing';
const Home = () =>{
    const Pricinglist = [
        {   
            id: 1,
            title: "Logo Design",
            description: "A logo for your product",
            price: "$5"
        },
        {   
            id: 2,
            title: "Web Design",
            description: "A website for your product",
            price: "$15"
        },
        {   
            id: 3,
            title: "UI Design",
            description: "A UI for your product",
            price: "$12"
        },
        {   
            id: 4,
            title: "UX Design",
            description: "A UX for your product",
            price: "$8"
        }
    ]
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
                        <PricingCard id={Pricinglist[0].id} imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title={Pricinglist[0].title} description={Pricinglist[0].description} price={Pricinglist[0].price} />
                    </Col>
                    <Col xs="12" lg="3" className="py-5">
                        <PricingCard id={Pricinglist[1].id} imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title={Pricinglist[1].title} description={Pricinglist[1].description} price={Pricinglist[1].price} />
                    </Col>
                    <Col xs="12" lg="3" className="py-5">
                        <PricingCard id={Pricinglist[2].id} imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title={Pricinglist[2].title} description={Pricinglist[2].description} price={Pricinglist[2].price} />
                    </Col>
                    <Col xs="12" lg="3" className="py-5">
                        <PricingCard id={Pricinglist[3].id} imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title={Pricinglist[3].title} description={Pricinglist[3].description} price={Pricinglist[3].price} />
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
        
export default Home;