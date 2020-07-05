import React, {useState} from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({title, type, bathrooms, bedrooms, price, city, email}) => {

        return (
            <div className="property-card">
                <div className="title">
                    {title}
                </div>
                <div className="type">
                    {type} - {city}
                </div>
                <div className="bathrooms">
                    Bathrooms: {bathrooms}
                </div>
                <div className="bedrooms">
                    Bedrooms: {bedrooms}
                </div>
                <div className="price">
                    Price: £{price}
                </div>
                <div className="email">
                    <a href={`mailto:${email}`}>Email for more details</a>
                </div>
            </div>
        )
}

export default PropertyCard;
