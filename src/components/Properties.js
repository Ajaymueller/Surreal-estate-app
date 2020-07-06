import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../styles/Properties.css';
import PropertyCard from './PropertyCard';
import axios from 'axios';
import Alert from '../components/Alert';
import SideBar from './SideBar';

const Properties = () => {

    const [properties, setProperties] = useState([])

    const [alert, setAlert] = useState({message: ""});

    const { search } = useLocation();

    useEffect(() => {
        axios
        .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
        .then(({ data }) => setProperties(data))
        .catch(error => console.log(error))
    }, [search]);
    
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
        <div className="properties">
            {properties.map(property => <PropertyCard key={property._id} title={property.title}
            type={property.type} bathrooms={property.bathrooms}
            bedrooms={property.bedrooms} price={property.price}
            city={property.city} email={property.email} />)}
            <Alert message={alert.message} success={alert.isSuccess} />
            <SideBar />
        </div>
        )
};

export default Properties;

