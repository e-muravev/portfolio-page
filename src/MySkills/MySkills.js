import React from 'react'
import './MySkills.css'
import { useHistory } from "react-router-dom"
import NextButton from '../NextButton/NextButton'
import PrevButton from '../PrevButton/PrevButton'
import confident from './confident.png'
import partly_confident from './partly_confident.png'


function MySkills() {
    
    let history = useHistory();
    const goNext = () => {
       history.push("/projects");
	}
	const goPrevious = () => {
		history.push("/about")
	}
    

    if (document.documentElement.clientWidth > 768) {
        return (
            <>
                <div className="MySkills arise">
                    <div className="HTML flex-space-between" >
                        <p>HTML/CSS/SASS</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Confident</p> 
                            <img src={confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="JavaScript flex-space-between">
                        <p>JavaScript/ES5/ES6/ES7</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Confident</p> 
                            <img src={confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="TypeScript_M flex-space-between" >
                        <p>TypeScript. Main Concepts.</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Confident</p> 
                            <img src={confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="TypeScript_A flex-space-between" >
                        <p>TypeScript. Advanced Concepts.</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Partly Confident</p> 
                            <img src={partly_confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="React flex-space-between" >
                        <p>React/Redux/Router</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Confident</p> 
                            <img src={confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="Git flex-space-between" >
                        <p>Git</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Partly Confident</p> 
                            <img src={confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="NodeJS flex-space-between" >
                        <p>Node JS</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Partly Confident</p> 
                            <img src={partly_confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="SequalizeORM_PostreSQL flex-space-between" >
                        <p>SequalizeORM(PostreSQL)</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Partly Confident</p> 
                            <img src={partly_confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="OOP flex-space-between" >
                        <p>Object oriented programming</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Confident</p> 
                            <img src={confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                    <div className="C flex-space-between" >
                        <p>Third-party language - C++</p>
                        <div className="flex-end">
                            <p style={{marginRight: 10}}>Confident</p> 
                            <img src={confident} alt='smile' width="20px" height="20px"/>         
                        </div>
                    </div>
                </div>
                <PrevButton goPrevious={goPrevious}/>
                <NextButton goNext={goNext} opacity={100} cursor={'pointer'}/>
            </>
        );
    }
    else {
        return (
            <>
            <div className="MySkills arise">
                <div className="HTML flex-space-between" >
                    <p>HTML/CSS</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Confident</p>
                        <img src={confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="JavaScript flex-space-between">
                    <p>JavaScript/ES5/ES6/ES7</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Confident</p>
                        <img src={confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="TypeScript_M flex-space-between" >
                    <p>TS. Main Concepts.</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Confident</p>
                        <img src={confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="TypeScript_A flex-space-between" >
                    <p>TS. Advanced Concepts.</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Partly Confident</p>
                        <img src={partly_confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="React flex-space-between" >
                    <p>React/Redux</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Confident</p>
                        <img src={confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="Git flex-space-between" >
                    <p>Git</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Partly Confident</p>
                        <img src={partly_confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="NodeJS flex-space-between" >
                    <p>Node JS</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Partly Confident</p>
                        <img src={partly_confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="SequalizeORM_PostreSQL flex-space-between" >
                    <p>PostreSQL</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Partly Confident</p>
                        <img src={partly_confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="OOP flex-space-between" >
                    <p>OOP</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Confident</p>
                        <img src={confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
                <div className="C flex-space-between" >
                    <p>TPL - C++</p>
                    <div className="flex-end">
                        <p style={{ marginRight: 10 }}>Confident</p>
                        <img src={confident} alt='smile' width="20px" height="20px" />
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default MySkills