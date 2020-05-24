import React, {useEffect, createRef} from 'react'
import { NavLink } from "react-router-dom";
import logo from '../logo.png'
import menu_mobile from './menu-mobile.png'
import './NavBar.css'

function NavBar() {
  
  const toggleContainer = React.createRef() 
  const toogleMenu = () => {
    let elem = document.getElementById("nav");
    if (elem.className === "navbar") {
      elem.className += " responsive";
    } else {
      elem.className = "navbar";
    }
  }

  const closeMenuByWindowCLick = (event) => {
    if(!toggleContainer.current.contains(event.target))
    {
      let elem = document.getElementById("nav");
      elem.className = "navbar";
    }
    
  }

  useEffect(() => {
    if(document.documentElement.clientWidth <= 768){
      window.addEventListener('click', closeMenuByWindowCLick)
    }
    return function cleanup() {
      window.removeEventListener('click',closeMenuByWindowCLick)
    } 
  })

  if (document.documentElement.clientWidth > 768)
  {
    return (
      <div id='nav' className="navbar" >
        <div className="flex-center">
          <img src={logo} alt="logo" width="40px" height="40px" />
          <p style={{ marginLeft: '3px' }}>EVGENY MURAVEV PARTNERSHIP</p>
        </div>
          <ul className="navigation">
            <li className="margin-right"> <NavLink className="link" exact to="/">HOME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/about">ABOUT ME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/skills">MY SKILLS</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/projects">MY PROJECTS</NavLink> </li>
            <li> <NavLink className="link" to="/contacts">CONTACTS</NavLink> </li>
          </ul>
        <img src={menu_mobile} className="icon" alt="menu" width="23px" height="auto" onClick={toogleMenu} />
      </div>
    );
  }
  else 
  {
    return (
      <div id='nav' className="navbar" >
        <div className="flex-center">
          <img src={logo} alt="logo" width="35px" height="35px" />
          <p style={{ marginLeft: '3px' }}>E&M PARTNERSHIP</p>
        </div>
        <div ref={toggleContainer} style={{display: 'flex', alignItems: 'center'}}> 
          <ul className="navigation">
            <li className="margin-right"> <NavLink className="link" to="/" onClick={toogleMenu}>HOME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/about" onClick={toogleMenu}>ABOUT ME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/skills" onClick={toogleMenu}>MY SKILLS</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/projects" onClick={toogleMenu}>MY PROJECTS</NavLink> </li>
            <li> <NavLink className="link" to="/contacts" onClick={toogleMenu}>CONTACTS</NavLink> </li>
          </ul>
          <img src={menu_mobile} className="icon" alt="menu" width="23px" height="auto" onClick={toogleMenu} />
        </div> 
      </div>
    );
  }
  
}

export default NavBar