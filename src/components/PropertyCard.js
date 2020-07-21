import React from 'react';
import PropTypes from "prop-types";
import '../styles/PropertyCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPoundSign,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faBath} /> {bathrooms}
                </div>
                <div className="bedrooms" data-testid="bedroom-id">
                    <FontAwesomeIcon icon={faBed} /> {bedrooms}
                </div>
                <div className="price" data-testid="price-id">
                    <FontAwesomeIcon icon={faPoundSign} /> {price}
                </div>
                <div className="email" data-testid="email-id">
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <a href={`mailto:${email}`}>Email for details</a>
                </div>
            </div>
        )
}


PropertyCard.propTypes = {
    title: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired,
    bathrooms: PropTypes.number.isRequired, 
    bedrooms: PropTypes.number.isRequired, 
    price: PropTypes.number.isRequired, 
    email: PropTypes.string.isRequired, 
};

export default PropertyCard;
