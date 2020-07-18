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
    });
    it("form should have an add button", () => {
        const { getByRole } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const btn = getByRole("button");
        expect(btn).toHaveTextContent("Add");
    })
    it("renders form fields correctly", () => {
        const { getByTestId, getByRole } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        expect(getByTestId("title")).toBeInTheDocument()
        expect(getByTestId("city")).toBeInTheDocument()
        expect(getByTestId("type")).toBeInTheDocument()
        expect(getByTestId("bathrooms")).toBeInTheDocument()
        expect(getByTestId("bedrooms")).toBeInTheDocument()
        expect(getByTestId("price")).toBeInTheDocument()
        expect(getByTestId("email")).toBeInTheDocument()
        expect(getByRole('button')).toBeInTheDocument()
    })
    it("should update the state when title changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const input = getByTestId("title-id");
        fireEvent.change(input, { target: { value: "changedValue" } });
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should update the state when city changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const input = getByTestId("city-id");
        fireEvent.change(input, { target: { value: "Manchester" } });
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should update the state when type changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const input = getByTestId("type-id");
        fireEvent.change(input, { target: { value: "Flat" } });
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should update the state when bathroom changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const input = getByTestId("bathroom-id");
        fireEvent.change(input, { target: { value: "4" } });
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should update the state when bedroom changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const input = getByTestId("bedroom-id");
        fireEvent.change(input, { target: { value: "3" } });
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should update the state when price changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const input = getByTestId("price-id");
        fireEvent.change(input, { target: { value: "250,000" } });
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should update the state when email changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const input = getByTestId("email-id");
        fireEvent.change(input, { target: { value: "email@email.com" } });
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
