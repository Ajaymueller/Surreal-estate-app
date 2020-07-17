import React from 'react';
import { render } from '@testing-library/react';
import AddProperty from '../components/AddProperty';
import { MemoryRouter } from 'react-router-dom';

describe("AddProperty", () => {
    it("component renders correctly", () => {
        const { asFragment } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
    it("returns a div with PropertyForm component", () => {
        const { getByTestId } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        const propertyForm = getByTestId("addProperty");
        expect(propertyForm).toBeInTheDocument();
        expect(propertyForm).toHaveClass("propertyFormDiv");
    });
});

