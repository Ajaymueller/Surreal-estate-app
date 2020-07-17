import React from 'react';
import { render } from '@testing-library/react';
import AddProperty from '../components/AddProperty';
import { MemoryRouter } from 'react-router-dom';

describe.only("AddProperty", () => {
    it("component renders correctly", () => {
        const { asFragment } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
    it("returns a div with PropertyForm component", () => {

    })
});

