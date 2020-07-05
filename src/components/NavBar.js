import React from 'react';
import '../styles/NavBar.css';
import logo from "../logo.png";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="Nav-bar">
            <div className="logo">
            <img 
        src={logo}
        className="logo" />
            </div>
            <nav>
        <ul className="navbar-links">
            <Link to="/"> <li className="navbar-links-item">View Properties</li></Link>
            <Link to="/add-property" ><li className="navbar-links-item">Add a Property</li></Link>
        </ul>
            </nav>
        </div>
    )
}

export default Navbar;