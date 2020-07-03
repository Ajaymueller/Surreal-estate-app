import React, { useState } from 'react';
import '../styles/AddProperty.css';
//import addProperty from '../requests/addProperty';
import axios from 'axios';
import Alert from './Alert';

const AddProperty = () => {

    const initialState = {
        fields: {
        title: '',
        city: 'Manchester', 
        type: '',
        bathrooms: '',
        bedrooms: '', 
        price: '', 
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
        //addProperty(fields);
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
        <div className="AddProperty">
            <h3>Add a property</h3>
            <form
            onSubmit={handleAddProperty}
            className="form">
                <div className="title-input">
                <label htmlFor="title">
                <input type="text"
                id="title"
                name="title"
                value={fields.title} 
                onChange={handleFieldChange}
                placeholder="Please enter a title" 
                required />
                </label>
                </div>
                <div className="city-input">
                <label htmlFor="city">
                <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}>
                    <option value="Manchester">Manchester</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Sheffield">Sheffield</option>
                    <option value="Liverpool">Liverpool</option>
                </select>
                </label>
                </div>
                <div className="type-input">
                <label htmlFor="type">
                    <select 
                    id="type"
                    name="type"
                    value={fields.type}
                    onChange={handleFieldChange}>
                        <option value="Flat">Flat</option>
                        <option value="Detached">Detached</option>
                        <option value="Semi-Detached">Semi-Detached</option>
                        <option value="Terraced">Terraced</option>
                        <option value="End of Terrace">End of Terrace</option>
                        <option value="Cottage">Cottage</option>
                        <option value="Bungalow">Bungalow</option>
                    </select>
                </label>
                </div>
                <div className="bathroom-input">
                    <label htmlFor="bathrooms">
                        Bathrooms:<select 
                        id="bathrooms"
                        name="bathrooms"
                        value={fields.bathrooms}
                        onChange={handleFieldChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6+">6+</option>
                        </select>
                    </label>
                </div>
                <div className="bedroom-input">
                    <label htmlFor="bedrooms">
                        Bedrooms:<select 
                        id="bedrooms"
                        name="bedrooms"
                        value={fields.bedrooms}
                        onChange={handleFieldChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6+">6+</option>
                        </select>
                    </label>
                </div>
                <div className="price-input">
                    <label htmlFor="price">
                        Price: <input type="text"
                        id="price"
                        name="price"
                        value={fields.price}
                        onChange={handleFieldChange} 
                        required/>
                    </label>
                </div>
                <div className="email-input">
                    <label htmlFor="email">
                        Email:<input type="email"
                        id="email"
                        name="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                        required />
                    </label>
                </div>
                <div className="add-btn">
                <label htmlFor="add">
                <button type="submit" 
                className="btn">Add</button>
                </label>  
                </div>
                {alert.message && 
                (<Alert message={alert.message} success={alert.isSuccess} />)}
            </form>
        </div>
    )
}

export default AddProperty;