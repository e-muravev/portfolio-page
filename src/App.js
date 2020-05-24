import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './HomePage/HomePage'
import NavBar from './NavBar/NavBar'
import AboutMe from './AboutMe/AboutMe'
import MySkills from './MySkills/MySkills'
import MyProjects from './MyProjects/MyProjects'
import Contacts from './Contacts/Contacts'
import Aligment from './Aligment/Alignment'
import NextButton from './NextButton/NextButton'



function App() {

  const [windowSize, setWindowSize] = useState('mobile')

  useEffect(() => {
    function handleResize() {
      document.documentElement.clientWidth > 768 ? setWindowSize('desktop') : setWindowSize('mobile')
    }
    window.addEventListener('resize', handleResize)

    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    } 
  })
   
  return (
    <div className="App">
        <NavBar/>
        <NextButton opacity={0} cursor={'default'}/> {/*рамзеры кнопки понадобятся в компоненте Aligment*/}
        <Switch>
          <Route exact path="/">
            <Aligment ignoreButtonSize={true}>
                <HomePage />
             </Aligment>
          </Route>
          <Route path="/about">
            <Aligment>
              <AboutMe/>
            </Aligment>
          </Route>
          <Route path="/skills">
              <MySkills/>
          </Route>
          <Route path="/projects">
            <MyProjects/>
          </Route>
          <Route path="/contacts">
            <Aligment>
              <Contacts/>
            </Aligment>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
