import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';
import { MemoryRouter } from 'react-router-dom';

const props = {
    message: "random message", 
    success: true, 
}

describe("alert", () => {
    it("component renders correctly", () => {
    const { asFragment } = render (
    <MemoryRouter><Alert { ...props } /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
});