import React from 'react';
import {
  Switch,
  Route,
  Redirect
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
   
  return (
    <div className="App">
        <NavBar/>
        <NextButton opacity={0} cursor={'default'}/> {/*рамзеры кнопки понадобятся в компоненте Aligment*/}
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/about">
            <Aligment>
              <AboutMe/>
            </Aligment>
          </Route>
          <Route path="/skills">
            <Aligment>
              <MySkills/>
            </Aligment>
          </Route>
          <Route path="/projects">
            <MyProjects/>
          </Route>
          <Route path="/contacts">
            <Aligment>
              <Contacts/>
            </Aligment>
          </Route>
          <Route path="/home">
             <Aligment ignoreButtonSize={true}>
                <HomePage/>
             </Aligment>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
