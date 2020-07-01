import React, { useState } from 'react';
import '../styles/AddProperty.css';
import addProperty from '../requests/addProperty';

const AddProperty = () => {

    const initialState = {
        fields: {
        title: '',
        city: 'Manchester', 
        type: '',
    }
}

    const [fields, setFields] = useState(initialState.fields);

    const handleAddProperty = (event) => {
        event.preventDefault();
        addProperty(fields);
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
                placeholder="Please enter a title" />
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
                <div className="add-btn">
                <label htmlFor="add">
                <button type="submit" 
                className="btn">Add</button>
                </label>  
                </div>
            </form>
        </div>
    )
}

export default AddProperty;