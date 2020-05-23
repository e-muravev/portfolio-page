import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../logo.png'
import menu_mobile from './menu-mobile.png'
import './NavBar.css'

function NavBar() {
  
  const toogleMenu = () => {
    let elem = document.getElementById("nav");
    if (elem.className === "navbar") {
      elem.className += " responsive";
    } else {
      elem.className = "navbar";
    }
  }

  if (document.documentElement.clientWidth > 576)
  {
    return (
      <div id='nav' className="navbar" >
        <div className="flex-center">
          <img src={logo} alt="logo" width="40px" height="40px" />
          <p style={{ marginLeft: '3px' }}>EVGENY MURAVEV PARTNERSHIP</p>
        </div>
          <ul className="navigation">
            <li className="margin-right"> <NavLink className="link" exact to="/" onClick={toogleMenu}>HOME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/about" onClick={toogleMenu}>ABOUT ME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/skills" onClick={toogleMenu}>MY SKILLS</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/projects" onClick={toogleMenu}>MY PROJECTS</NavLink> </li>
            <li> <NavLink className="link" to="/contacts" onClick={toogleMenu}>CONTACTS</NavLink> </li>
          </ul>
        <img src={menu_mobile} class="icon" alt="menu" width="23px" height="auto" onClick={toogleMenu} />
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
          <ul className="navigation">
            <li className="margin-right"> <NavLink className="link" to="/home" onClick={toogleMenu}>HOME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/about" onClick={toogleMenu}>ABOUT ME</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/skills" onClick={toogleMenu}>MY SKILLS</NavLink> </li>
            <li className="margin-right"> <NavLink className="link" to="/projects" onClick={toogleMenu}>MY PROJECTS</NavLink> </li>
            <li> <NavLink className="link" to="/contacts" onClick={toogleMenu}>CONTACTS</NavLink> </li>
          </ul>
        <img src={menu_mobile} class="icon" alt="menu" width="23px" height="auto" onClick={toogleMenu} />
      </div>
    );
  }
  
}

export default NavBar