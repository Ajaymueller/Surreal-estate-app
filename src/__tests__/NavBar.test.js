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
    it("component renders", () => {
        const { asFragment } = render( 
        <MemoryRouter><NavBar {...props} /></MemoryRouter>)
    expect(asFragment).toMatchSnapshot();
    });
});