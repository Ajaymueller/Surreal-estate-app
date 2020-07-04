import React, { useState, useEffect } from 'react';
import '../styles/Properties.css';
import PropertyCard from './PropertyCard';
import axios from 'axios';
import Alert from '../components/Alert';

const Properties = () => {

    const [properties, setProperties] = useState([])

    const [alert, setAlert] = useState({message: ""});
    
    useEffect(() => {
        axios
        .get('http://localhost:4000/api/v1/PropertyListing')
        .then((response) => {
          console.log(response)
          setProperties(response.data)
        }).catch((error) => {
            setAlert({ message: error });
        })
        }, []);

    return (
        <div>
            {properties.map(property => <PropertyCard key={property._id} title={property.title}
            type={property.type} bathrooms={property.bathrooms}
            bedrooms={property.bedrooms} price={property.price}
            city={property.city} email={property.email} />)}
            <Alert message={alert.message} success={alert.isSuccess} />
        </div>
        )
};

export default Properties;

