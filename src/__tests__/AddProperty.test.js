import React from 'react';
import { render } from '@testing-library/react';
import AddProperty from '../components/AddProperty';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

describe("AddProperty", () => {
    it("component renders correctly", () => {
        const { asFragment } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
    it("renders a form", () => {
        const { getByTestId } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        const form = getByTestId("form-id");
        expect(form).toBeInTheDocument();
    })
});

describe("form", async () => {
    xit("makes a axios post request on submission", async () => {
        axios.post.mockResolvedValue({
            data: [ {
                title: 'Modern Semi detached', 
                city: 'Liverpool', 
                type: 'semi detached', 
                bathrooms: '3', 
                bedrooms: '4', 
                price: '250000', 
                email: 'random@hotmail.com' 
            }
            ]
        });
    });
})

describe("form", () => {
    it("renders the correct fields in the form", () => {
        const { getByTestId } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        expect(getByTestId("title-id")).toHaveClass("title-input")
        expect(getByTestId("city-id")).toHaveClass("city-input")
        expect(getByTestId("type-id")).toHaveClass("type-input")
        expect(getByTestId("bathroom-id")).toHaveClass("bathroom-input")
        expect(getByTestId("bedroom-id")).toHaveClass("bedroom-input")
        expect(getByTestId("price-id")).toHaveClass("price-input")
        expect(getByTestId("email-id")).toHaveClass("email-input")
    })
})

