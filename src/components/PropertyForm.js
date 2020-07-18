import React from 'react';
import '../styles/AddProperty.css';
import Alert from './Alert';

const PropertyForm = ({ handleAddProperty, handleFieldChange, title,
    city,
    type,
    bedrooms,
    bathrooms,
    price,
    email, }) => {
    return (
        <div className="AddProperty" data-testid="AddPropertyForm">
            <h3>Add a property</h3>
            <form
            onSubmit={handleAddProperty}
            className="form"
            data-testid="form-id">
                <div className="title-input" data-testid="title">
                <label htmlFor="title">
                <input type="text"
                id="title"
                name="title"
                value={title} 
                onChange={handleFieldChange}
                placeholder="Please enter a title"
                data-testid="title-id"
                required />
                </label>
                </div>
                <div className="city-input" data-testid="city">
                <label htmlFor="city">
                <select
                id="city"
                name="city"
                value={city}
                onChange={handleFieldChange}
                data-testid="city-id">
                    <option value="Manchester">Manchester</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Sheffield">Sheffield</option>
                    <option value="Liverpool">Liverpool</option>
                </select>
                </label>
                </div>
                <div className="type-input" data-testid="type" >
                <label htmlFor="type">
                    <select 
                    id="type"
                    name="type"
                    value={type}
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
                <div className="bathroom-input" data-testid="bathrooms">
                    <label htmlFor="bathrooms">
                        Bathrooms:<select 
                        id="bathrooms"
                        name="bathrooms"
                        value={bathrooms}
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
                <div className="bedroom-input" data-testid="bedrooms">
                    <label htmlFor="bedrooms">
                        Bedrooms:<select 
                        id="bedrooms"
                        name="bedrooms"
                        value={bedrooms}
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
                <div className="price-input" data-testid="price">
                    <label htmlFor="price">
                        Price: <input type="text"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleFieldChange} 
                        required/>
                    </label>
                </div>
                <div className="email-input" data-testid="email">
                    <label htmlFor="email">
                        Email:<input type="email"
                        id="email"
                        name="email"
                        value={email}
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

export default PropertyForm;