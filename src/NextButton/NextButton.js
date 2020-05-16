import React from 'react'
import right_arrow from '../arrow2.png'

function NextButton({goNext, opacity, cursor}) {
    // let position;
    // (document.documentElement.clientWidth > 576) ? position = 'fixed' : position = null 
    return (
        <div className='Arrow' 
            style={{cursor: cursor, position: 'fixed', bottom: 40, 
            right: 30, opacity: opacity}} >
            <h3 style={{position: 'absolute', bottom: -40, right: 10 }}>Next</h3>
            <img className="arrow" 
                 src={right_arrow} 
                alt="arrow"
                onClick={goNext}
            /> 
        </div>
    );
}

export default NextButton