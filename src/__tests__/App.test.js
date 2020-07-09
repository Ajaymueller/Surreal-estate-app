import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import { MemoryRouter } from 'react-router-dom';

describe("App", () => {
    it("component renders correctly", () => {
        const { asFragment } = render(
            <MemoryRouter><App /></MemoryRouter> )

        expect(asFragment).toMatchSnapshot();
    })
})