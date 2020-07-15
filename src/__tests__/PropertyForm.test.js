import React from 'react';
import { render } from '@testing-library/react';
import PropertyForm from '../components/PropertyForm';
import { MemoryRouter } from 'react-router-dom';

const props = {
    handleAddProperty: jest.fn(),
    handleFieldChange: jest.fn(), 
    title: "randomTitle", 
    city: "Liverpool", 
    type: "Semi-Detached",
    bedrooms: 3,
    bathrooms: 3, 
    price: 250000,
    email: "random@gmail.com",
};

describe.only("PropertyForm", () => {
    it("component renders correctly with props", () => {
        const { asFragment } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
});