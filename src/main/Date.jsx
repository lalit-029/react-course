import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Timeprint = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };
    return(
        <div className="time-height text-center my-5 d-flex flex-column justify-content-center align-items-center">
            <h1> {ctime} </h1>
            <Button onClick={UpdateTime} className="text-uppercase" variant="primary"> get time </Button>
            <p className="mt-5"><small>Click "Button" to refresh time now!</small></p>
        </div>
    );
};
export default Timeprint; 