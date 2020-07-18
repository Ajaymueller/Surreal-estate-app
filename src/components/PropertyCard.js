import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({title, type, bathrooms, bedrooms, price, city, email}) => {

        return (
            <div className="property-card">
                <div className="title" data-testid="title-id">
                    {title}
                </div>
                <div className="type" data-testid="type-id">
                    {type} - {city}
                </div>
                <div className="bathrooms" data-testid="bathroom-id">
                    Bathrooms: {bathrooms}
                </div>
                <div className="bedrooms" data-testid="bedroom-id">
                    Bedrooms: {bedrooms}
                </div>
                <div className="price" data-testid="price-id">
                    Price: £{price}
                </div>
                <div className="email" data-testid="email-id">
                    <a href={`mailto:${email}`}>Email for more details</a>
                </div>
            </div>
        )
}

export default PropertyCard;
