import React from 'react';
import '../styles/NavBar.css';
import logo from "../logo.png";



const Navbar = () => {
    return (
        <div className="Nav-bar">
        <img 
        src={logo}
        className="logo" />
        <ul className="navbar-links">
            <li className="navbar-links-item">View Properties</li>
            <li className="navbar-links-item">Add a Property</li>
        </ul>
        </div>
    )
}

export default Navbar;