import React, {useEffect, useState} from 'react'
import gif from './qH.gif'
import PrevButton from '../PrevButton/PrevButton'
import { useHistory } from "react-router-dom";

function Contacts() {
    
    const [text, setText] = useState('Still waiting')
    
    useEffect(() => {
        setTimeout(()=>{
            if(text==='Still waiting...') 
            {
                setText('Still waiting')
            }
            else{
                setText(text+'.')
            } 
        }, 500)
        
    })

    let history = useHistory();
    const goPrevious = () => {
      history.push("/Projects");
    }

    if(document.documentElement.clientWidth > 576)
    {
        return (
            <div className="arise" style={{marginTop: '2rem', padding: '0 2rempx'}}>
                <h2>Thank you for your time. If you have questions you could write me or call me.</h2>
                <p><span style={{fontWeight: 'bold'}}>Email:</span> e.muravev.js@gmail.com</p>
                <p><span style={{fontWeight: 'bold'}}>Telephone number:</span> +79835029477</p>
                <img style={{marginTop: '1rem', width: '50%'}} src={gif} alt="still waiting"/>
                <h1 style={{marginTop: '0rem'}}>{text}</h1>
                <PrevButton goPrevious={goPrevious}/>
            </div>
        );
    }
    else {
        return (
            <div className="arise" style={{marginTop: '0rem', padding: '0 2rem'}}>
                <h4>Thank you for your time. If you have questions you could write me or call me.</h4>
                <p><span style={{fontWeight: 'bold'}}>Email:</span> e.muravev.js@gmail.com</p>
                <p><span style={{fontWeight: 'bold'}}>Telephone number:</span> +79835029477</p>
                <img style={{marginTop: '2rem', width: '80%'}} src={gif} alt="still waiting"/>
                <h3 style={{marginTop: '0rem'}}>{text}</h3>
            </div>
        ); 
    }
    
}

export default Contacts