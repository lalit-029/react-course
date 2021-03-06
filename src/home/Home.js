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
    const pricinglistcard = Pricinglist.map( (pricingcard, i) => {
        return <PricingCard key={i} id={pricingcard.id} imagesrc="https://dummyimage.com/400x400/d4d4d4/ffffff&text=Pricing+Card" title={pricingcard.title} description={pricingcard.description} price={pricingcard.price} />
    })
    const Servicelist = [
        {
            id: 1,
            title: "Animation",
            imagesrc: "animation.png",
            className: "",
            description: "I blew a little magic to make static designs work without coding. Yah! It's Animation."
        },
        {
            id: 2,
            title: "Interaction",
            imagesrc: "interaction.jpg",
            className: "interaction",
            description: "Optimized UI/UX for digital products like desktop, mobile, etc. Help business growth more."
        },
        {
            id: 3,
            title: "Illustration",
            imagesrc: "illustration.jpg",
            className: "illustration",
            description: "Design things abstract become visible with a look impressive."
        },
    ]
    const servicelistcard = Servicelist.map( (servicecard, i) => {
        return <Work key={i} id={servicecard.id} className={servicecard.className} imagesrc={servicecard.imagesrc} title={servicecard.title} description={servicecard.description} />
    })
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
                <Row className="work-row">
                    {servicelistcard}
                </Row>
            </Container> 
            <Container className="p-0 py-5">
                <h2 className="text-center mb-0 pb-5">Skills & Experiences</h2>
                <Skills />
            </Container>
            <Container className="py-5 px-0">
                <Row>
                    <h2 className="text-center mb-5">Pricing</h2>
                    {pricinglistcard}
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