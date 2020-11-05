import React from 'react';

const Slotgame = (props) => {
    let {x,y,z} = props;
    if ((x===y) && (y===z)){
        return(
            <>
                <div className="slot-inner">
                    <h4>
                        {x} {y} {z}
                    </h4>
                    <h4>This is Matching.</h4>
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className="slot-inner">
                    <h4>
                        {x} {y} {z}
                    </h4>
                    <h4>This is not Matching.</h4>
                </div>
            </>
        )
    }
} 
export default Slotgame;