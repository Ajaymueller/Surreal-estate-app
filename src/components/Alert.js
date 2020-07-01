import React from 'react';
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
    <div className={`Alert alert-${success ? "success" : "error" }`}>
        {message}
    </div>

}

export default Alert;