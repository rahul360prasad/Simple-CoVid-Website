import React from 'react'
import Logo from './Images/logo2.png'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
         <NavLink  className="nav-link" to="/">
            <img src={Logo}/>
          </NavLink>          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink  activeClassName='menu_item' className="nav-link" to="/" >Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu_item' className="nav-link" to="/saftey">Saftey<span className="sr-only">(current)</span></NavLink>
              </li>              
              <li className="nav-item">
                <NavLink activeClassName='menu_item' className="nav-link" to="/symptoms">Symptoms</NavLink>
              </li>
            </ul>
          </div>
        </nav>
    )
}
