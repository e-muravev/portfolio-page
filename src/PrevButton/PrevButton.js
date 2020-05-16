import React from 'react'
import left_arrow from '../arrow.png'

function PrevButton({goPrevious}) {
    // let position;
    // (document.documentElement.clientWidth > 576) ? position = 'fixed' : position = 'static' 
    return (
        <div className='Arrow' style={{cursor: 'pointer', position: 'fixed', bottom: 40, left: 30}} >
            <img className="arrow" 
                 src={left_arrow} 
                 alt="arrow"
                 onClick={goPrevious}
         	/>
			<h3 style={{position: 'absolute', bottom: -40, left: 10 }}>Prev</h3>
        </div>
    );
}

export default PrevButton