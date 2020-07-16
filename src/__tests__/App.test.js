import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';
import Properties from '../components/Properties';
import AddProperty from '../components/AddProperty'; 
import { MemoryRouter } from 'react-router-dom';

describe("App", () => {
    it("component renders correctly", () => {
        const { asFragment } = render(
            <MemoryRouter><App /></MemoryRouter> )

        expect(asFragment).toMatchSnapshot();
    })
})

describe("With React router", () => {
    xit("renders Properties component", () => {
    const { getByText, getByTestId } = render(
    <MemoryRouter><App /></MemoryRouter> )
    expect(getByTestId("properties")).not.toBeInTheDocument()
    fireEvent.click(getByText(/properties/i));
    expect(getByTestId("properties")).toBeInTheDocument();
    });
    xit("renders AddProperty component", () => {
    const { getByText, getByTestId } = render(
    <MemoryRouter><App /></MemoryRouter> )
    fireEvent.click(getByText(/add a property/i));
    const addPropertyComponent = getByTestId("AddProperty")
    expect(addPropertyComponent).toBeInTheDocument();
    });
});