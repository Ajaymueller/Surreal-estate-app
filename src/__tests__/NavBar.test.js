import React from 'react';
import { render, fireEvent, getByRole, findByTestId } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router-dom';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

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

    });
    it("displays a sign out button if there is a userID", () => {
    const { getByTestId } = render( 
    <MemoryRouter><NavBar {...props} /></MemoryRouter>)
    const button = getByTestId("btn-id");
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe("Sign out");
    })
    xit("displays a Facebook login component", () => {
    const { getByTestId } = render( 
    <MemoryRouter><NavBar {...props} /></MemoryRouter>)

    })
});

describe("with router", () => {
    xit("should navigate to view properties page", () => {
        const { getByTestId } = 
        render( 
            <MemoryRouter><NavBar {...props} /></MemoryRouter>)
        const viewProperties = getByTestId("view-properties-id")
        fireEvent.click(getByText("View Properties"))
        expect(viewProperties).toBeInTheDocument();
    })
})