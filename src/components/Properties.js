import React, { useState, useEffect } from 'react';
import '../styles/Properties.css';
import PropertyCard from './PropertyCard';
import axios from 'axios';

const Properties = () => {

    const [properties, setProperties] = useState([])
    
    useEffect(() => {
        axios
        .get('http://localhost:4000/api/v1/PropertyListing')
        .then((response) => {
          console.log(response)
          setProperties(response.data)
        })
        }, []);

    return (
        <div>
            {properties.map(property => <PropertyCard title={property.title}
            type={property.type} bathrooms={property.bathrooms}
            bedrooms={property.bedrooms} price={property.price}
            city={property.city} email={property.email} />)})
        </div>
        )
};

export default Properties;

