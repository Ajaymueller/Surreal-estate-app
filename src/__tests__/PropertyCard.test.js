import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const props = {
    title: "randomTitle", 
    type:"Semi-Detached", 
    bathrooms: 3, 
    bedrooms: 4, 
    Price: 200000, 
    Email: "random@email.com"
}; 

describe("PropertyCard", () => {
    it("renders with correct props", () => {
    const { asFragment } = render(
    <MemoryRouter><PropertyCard {...props} /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
    it("has all correct fields", () => {
    const { getByTestId } = render(
    <MemoryRouter><PropertyCard {...props} /></MemoryRouter> )
    expect(getByTestId("title-id")).toHaveClass("title");
    expect(getByTestId("type-id")).toHaveClass("type");
    expect(getByTestId("bathroom-id")).toHaveClass("bathrooms");
    expect(getByTestId("bedroom-id")).toHaveClass("bedrooms");
    expect(getByTestId("price-id")).toHaveClass("price");
    expect(getByTestId("email-id")).toHaveClass("email");
    });
});
