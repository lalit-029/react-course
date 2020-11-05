import React from 'react';
import {Row, Col} from "react-bootstrap";
import Slotgame from './Slotgame';
const Game = (props) => {
    return(
        <div className="py-5">
            <h2 className="text-center my-5"> 🎰 Welcome to <span style={{fontWeight:"Bold", textTransform: "Uppercase"}}>slot machine game 🎰 </span></h2>
            <Row className="my-5 mx-0">
                <Col xs="12" lg={{span: 4, offset: 4}} className="text-center">
                    <div className="slot-machine">
                        <Slotgame x="😃" y="😃" z="😃" />
                        <Slotgame x="😃" y="😃" z="😺" />
                        <Slotgame x="😃" y="😈" z="😃" />
                        <Slotgame x="❄️" y="❄️" z="❄️" />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Game;