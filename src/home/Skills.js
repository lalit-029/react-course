import React from 'react'; 
import {Row, Col} from 'react-bootstrap';

function Skills() {
    return (
        <Row className="p-5">
            <Col xs="12" lg="6">
                
            </Col>
            <Col xs="12" lg="6">
                <div className="experience-list">
                    <div className="experience-year">
                        <h6>Apr - 2019</h6>
                    </div>
                    <div className="experience-post">
                        <h5>UI Designer</h5>
                        <small>BERYL SYSTEMS PVT. LTD.</small>
                    </div>
                </div>
                <div className="experience-list">
                    <div className="experience-year">
                        <h6>Jan - 2019</h6>
                    </div>
                    <div className="experience-post">
                        <h5>Web Designer</h5>
                        <small>Ducat</small>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default Skills;