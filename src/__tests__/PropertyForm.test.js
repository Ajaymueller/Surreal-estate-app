import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PropertyForm from '../components/PropertyForm';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'

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
    it("renders a form", () => {
        const { getByTestId } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const form = getByTestId("form-id");
        expect(form).toBeInTheDocument();
    })
    it("renders form fields correctly", () => {
        const { getByTestId } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        expect(getByTestId("title")).toBeInTheDocument()
        expect(getByTestId("city")).toBeInTheDocument()
        expect(getByTestId("type")).toBeInTheDocument()
        expect(getByTestId("bathrooms")).toBeInTheDocument()
        expect(getByTestId("bedrooms")).toBeInTheDocument()
        expect(getByTestId("price")).toBeInTheDocument()
        expect(getByTestId("email")).toBeInTheDocument()
    })
    xit("should update the state when changed", () => {
        const { getAllByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const input = getAllByTestId("input");
        fireEvent.change(input, { target: { value: ""}})
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should call handleAddProperty on form submission", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleAddProperty = props.handleAddProperty;
        fireEvent.submit(getByTestId("form-id"));
        expect(handleAddProperty).toHaveBeenCalled();
    })
});