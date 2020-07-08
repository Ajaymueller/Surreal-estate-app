import React from 'react';
import '../styles/NavBar.css';
import logo from "../logo.png";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="navbar">
        <logo> <img 
        src={logo}
        className="logo"
        alt="logo" /> </logo>
        <nav>
        <ul id="nav_links">
            <Link to="/"> <li className="navbar-links-item">View Properties</li></Link>
            <Link to="/add-property" ><li className="navbar-links-item">Add a Property</li></Link>
        </ul>
            </nav>
        </div>
    )
}

export default Navbar;