import React, { useState } from 'react';
import '../styles/AddProperty.css';
import axios from 'axios';
import PropertyForm from './PropertyForm'

const AddProperty = () => {

    const initialState = {
        fields: {
        title: '',
        city: 'Manchester', 
        type: '',
        bathrooms: 0,
        bedrooms: 0, 
        price: 0, 
        email: '',
    }, 
    alert: {
        message: '', 
        isSuccess: false,
    },
}

    const [fields, setFields] = useState(initialState.fields);

    const [alert, setAlert] = useState(initialState.alert);

    const handleAddProperty = (event) => {
        event.preventDefault();
        setAlert({ message: "", isSuccess: false });
        if(!price.value === Number) {
            alert("Price must be a number!")
        } else {
            axios
            .post('http://localhost:4000/api/v1/PropertyListing', { title: title.value, city: city.value, type: type.value, 
            bathrooms: bathrooms.value, bedrooms: bedrooms.value, price: price.value, email: email.value })
            .then((response) => {
            console.log(response)
            setAlert({
                message: "Property Added",
                isSuccess: true,
              })
        }).
        catch((err) => {
        console.log(err);
        setAlert({
            message: "Server error. Please try again later.",
            isSuccess: false,
          })
        })
        }
    }

    const handleFieldChange = (event) => {
        setFields({...fields, [event.target.name]: event.target.value });
    };

    return(
        <div data-testid="addProperty"
        className="propertyFormDiv">
        <PropertyForm 
        handleAddProperty={handleAddProperty}
        handleFieldChange={handleFieldChange}
        title={fields.title}
        city={fields.city}
        type={fields.type}
        bedrooms={fields.bedrooms}
        bathrooms={fields.bathrooms}
        price={fields.price}
        email={fields.email}
        />
        </div>
    )
}

export default AddProperty;