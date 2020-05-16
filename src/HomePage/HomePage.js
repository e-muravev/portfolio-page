import React from 'react'
import './HomePage.css'
import Slider from '../Slider/Slider'
import NextButton from '../NextButton/NextButton'
import { useHistory } from "react-router-dom";


function HomePage() {
   const text = '${Hello';
   
   let history = useHistory();
   const goNext = () => {
      history.push("/portfolio-page/about");
   }
   const goToProjects = () => {
      history.push("/portfolio-page/projects")
   }

   if(document.documentElement.clientWidth > 576) {
      return (
         <div className="arise homepage" style={{width: '80%'}}>
           <h3>
              <span className="blue-color">
                 {text}
                    <span className="line-through">
                       +world
                    </span>}
              </span> 
              my dear new guest!
           </h3> 
           <h3>Welcome to a simple and the same time funny Evgeny Muravev portfolio website!</h3>
           <h3>I know u wanna check my projects, isn’t it? </h3>
           <div className="flex-center">
              <h3 style={{margin: '0'}}>Okey, let's do it man/baby! Click here -></h3>
              <h3 className="openProjects" 
                  onClick={goToProjects}>
                 <span className="red-color">
                    this
                 </span>
                 .
                 <span className="blue-color">
                    openProjects()
                 </span>
              </h3>
           </div>     
           <Slider/>
           <h3 style={{marginTop: -5}}>...or check out some funny stuff. Swipe slider!</h3>
           <NextButton goNext={goNext} opacity={100} cursor={'pointer'}/>
         </div>  
        );
   }
   else {
      return (
         <div className="arise homepage" style={{width: '80%'}}>
           <h4>
              <span className="blue-color">
                 {text}
                    <span className="line-through">
                       +world 
                    </span>}
              </span> 
              {`     my dear new guest!`}
           </h4> 
           <h4>Welcome to a simple and the same time funny Evgeny Muravev portfolio website!</h4>
           <h4>I know u wanna check my projects, isn’t it? </h4>
           <h4 style={{margin: '0'}}>Okey, let's do it man/baby! </h4>
           <h4 className="openProjects" 
               onClick={goToProjects}>
               Click here ->
               <span className="red-color">
                    this
               </span>
               .
               <span className="blue-color">
                  openProjects()
               </span>
           </h4>    
           <Slider/>
           <h4>...or check out some funny stuff. Swipe slider!</h4>
         </div>
      );   
   }

}
	


export default HomePage