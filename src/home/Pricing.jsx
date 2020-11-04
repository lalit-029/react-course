import React, { Component } from "react";
import {Row, Col, Button, Card} from "react-bootstrap";
class PricingCard extends Component {
    render(){
        return(
            <>
                <Card>
                    <Card.Img variant="top" src={this.props.imagesrc} alt="pricing-image" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Button variant="primary" className="w-100">Book now - {this.props.price}</Button>
                    </Card.Body>
                </Card>
                    
            </>
        );
    }
}
export default PricingCard;