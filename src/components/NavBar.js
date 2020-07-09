import React from 'react';
import '../styles/NavBar.css';
import logo from "../logo.png";
import { Link, BrowserRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';


const Navbar = ({ onLogin, userID, onLogout }) => {

    return (
        <div className="navbar" data-testid="navbar">
        <div> <img 
        src={logo}
        className="logo"
        alt="logo" /> </div>
        <nav>
        <ul id="nav_links">
            <BrowserRouter>
            <Link to="/"> <li className="navbar-links-item">View Properties</li></Link>
            <Link to="/add-property" ><li className="navbar-links-item">Add a Property</li></Link>
            { !userID ? <FacebookLogin appId="2346104855684184"
            autoLoad={true}
            fields="name,email,picture"
            callback={onLogin} /> : <button onClick={onLogout}>Sign out</button> }
            </BrowserRouter>
        </ul>
            </nav>
        </div>
    )
}

export default Navbar;