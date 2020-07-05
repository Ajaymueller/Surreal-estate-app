import React from 'react';
import '../styles/SideBar.css';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { useLocation } from "react-router-dom";

const buildQueryString = (operation, valueObj) => {

    const { search } = useLocation();


    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
        ...currentQueryParams, 
        [operation]: JSON.stringify(valueObj)
    }

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false })
}

const SideBar = () => {

    return (
        <div className="side-bar">
        <ul className="navbar-links">
            <Link to={`/?query={"city": "Manchester"}`}><li>Manchester</li></Link>
            <Link to={`/?query={"city": "Leeds"}`}><li>Leeds</li></Link>
            <Link to={`/?query={"city": "Sheffield"}`}><li>Sheffield</li></Link>
            <Link to={`/?query={"city": "Liverpool"}`}><li>Liverpool</li></Link>
            <Link to={buildQueryString('sort', { price: 1 })}><li>Ascending</li></Link>
            <Link to={buildQueryString('sort', { price: -1 })}><li>Descending</li></Link>
        </ul>
    </div>
    )
}

export default SideBar;