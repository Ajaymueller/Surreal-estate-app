import React, {useState} from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({title, type, bathrooms, bedrooms, price, city, email}) => {

        return (
            <div className="property-card">
                <div className="title">
                    title: {title}
                </div>
                <div className="type">
                    type:{type}
                </div>
                <div className="bathrooms">
                    bathrooms:{bathrooms}
                </div>
                <div className="bedrooms">
                    bedrooms:{bedrooms}
                </div>
                <div className="price">
                    Price{price}
                </div>
                <div className="city">
                    Location: {city}
                </div>
                <div className="email">
                    Email: {email}
                </div>
            </div>
        )
}

export default PropertyCard;
