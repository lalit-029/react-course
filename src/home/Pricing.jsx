import React, { Component } from "react";
import {Row, Col, Button, Card} from "react-bootstrap";
const PricingCard = (props) => {
    return(
        <>
            <Card>
                <Card.Img variant="top" src={props.imagesrc} alt="pricing-image" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <Button variant="primary" className="w-100">Book now - {props.price}</Button>
                </Card.Body>
            </Card>
                
        </>
    );
}
export default PricingCard;