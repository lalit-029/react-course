import React from 'react'; 
import {Col} from 'react-bootstrap';

let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
if ( currDate >= 1 && currDate < 12 ) {
    greeting = "Good Morning!!";
} else if ( currDate >= 12 && currDate < 16 ) {
    greeting = "Good Afternoon!!";
} else if ( currDate >= 16 && currDate < 19) {
    greeting = "Good Evening!!";
} else{
    greeting = "";
}

function Intro() {
    return (
        <Col xs="12" lg="12">
            <h1 className="banner-title">{greeting} Hello, my name is lalit kumar. I'm a <span>UI Designer</span> with 1+ years of experience in the digital world.</h1>
        </Col>
    );
}
export default Intro;