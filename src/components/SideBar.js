import React, { useState } from 'react';
import '../styles/SideBar.css';
import qs from 'qs';
import { Link, useLocation, useHistory } from "react-router-dom";


const SideBar = () => {

    const history = useHistory();

    const { search } = useLocation();

    const [ query, setQuery ] = useState("");

    const buildQueryString = (operation, valueObj) => {
      
        const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
      
        const newQueryParams = {
          ...currentQueryParams,
          [operation]: JSON.stringify({
            ...JSON.parse(currentQueryParams[operation] || '{}'),
            ...valueObj,
          }),
        };
      
        return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const newQueryString = buildQueryString('query', { title: { $regex: query }});
        history.push(newQueryString);
        setQuery("");
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="side-bar">
            <form onSubmit={handleSearch}>
                <input type="text"
                value={query}
                onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        <ul className="navbar-links" data-testid="navbarlinks-id">
            <h3>Filter by city</h3>
            <Link to={`/?query={"city": "Manchester"}`}><li>Manchester</li></Link>
            <Link to={`/?query={"city": "Leeds"}`}><li>Leeds</li></Link>
            <Link to={`/?query={"city": "Sheffield"}`}><li>Sheffield</li></Link>
            <Link to={`/?query={"city": "Liverpool"}`}><li>Liverpool</li></Link>
            <h3>Sort by</h3>
            <Link to={buildQueryString('sort', { price: 1 })}><li>Ascending</li></Link>
            <Link to={buildQueryString('sort', { price: -1 })}><li>Descending</li></Link>
        </ul>
    </div>
    )
}

export default SideBar;