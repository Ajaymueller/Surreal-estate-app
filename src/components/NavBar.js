import React from 'react';
import '../styles/NavBar.css';
import logo from "../logo.png";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="Navbar" id="top-nav">
        <nav>
        <logo> <img 
        src={logo}
        className="logo" /> </logo>
        <ul id="nav_links">
            <Link to="/"> <li className="navbar-links-item">View Properties</li></Link>
            <Link to="/add-property" ><li className="navbar-links-item">Add a Property</li></Link>
        </ul>
            </nav>
        </div>
    )
}

export default Navbar;

/*@media only screen and (max-width: 800px) {
    nav ul {
        height: 200px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    
    #nav_links li {
        font-size: 20px;
        padding: 0px;
    }

    .Navbar nav {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        background: #333;
        border-bottom: 10px solid grey;
        margin: 0 auto;
        text-align: left;
        justify-content: flex-start;
        width: calc(100% - 60px);
        height: 180px;
    }

    .logo {
        height: 75px;
        width: 200px
    }
} */