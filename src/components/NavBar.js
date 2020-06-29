import React from 'react';
import '../styles/NavBar.css';
import logo from "../logo.png";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="Nav-bar">
        <img 
        src={logo}
        className="logo" />
        <ul className="navbar-links">
            <Link to="/"> <li className="navbar-links-item">View Properties</li></Link>
            <Link to="/add-property" ><li className="navbar-links-item">Add a Property</li></Link>
        </ul>
        </div>
    )
}

export default Navbar;