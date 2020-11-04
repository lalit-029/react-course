import React, { Component } from 'react'; 
import {Row, Col} from 'react-bootstrap';

const Work = (props) => {
    return (
        <Col xs="12" lg="4" className="p-5 work-card">
            <img src={props.imagesrc} className={`mb-5 ${props.className}`} alt="work" />
            <h4 className="mb-4">{props.title}</h4>
            <p>{props.description}</p>
        </Col>
    );
}
export default Work;