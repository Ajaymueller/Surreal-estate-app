import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router-dom';

const props = {
    onLogin: jest.fn(), 
    userID: 10, 
    onLogout: jest.fn(),
};

describe("NavBar", () => {
    it("component renders with correct props", () => {
        const { asFragment } = render( 
        <MemoryRouter><NavBar {...props} /></MemoryRouter>)
    expect(asFragment).toMatchSnapshot();
    });
    it("displays a logo", () => {
        const { getByAltText } = render( 
        <MemoryRouter><NavBar {...props} /></MemoryRouter>)
        const logo = getByAltText("logo");
        expect(logo).toBeInTheDocument();
    })
    it("displays a list with link to properties and add properties page", () => {
        const { getByText } = render( 
        <MemoryRouter><NavBar {...props} /></MemoryRouter>)
        const viewProperties = getByText("View Properties")
        const addProperty = getByText("Add a Property")
        expect(viewProperties).toBeInTheDocument();
        expect(addProperty).toBeInTheDocument();

    })
});