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
          setProperties(response.data)
        }).catch((error) => {
            setAlert({ message: error });
        })
        }, []);

    return (
        <div>
            <SideBar />
        <div className="properties" data-testid="properties">
            {properties.map((property) => (
              <div className="properties" key={property._id}>
                <PropertyCard
                  _id={property._id}
                  title={property.title}
                  city={property.city}
                  type={property.type}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                  price={property.price}
                  email={property.email} /> </div> ))}
            <Alert message={alert.message} success={alert.isSuccess} />
        </div>
        </div>
        )
};

export default Properties;

