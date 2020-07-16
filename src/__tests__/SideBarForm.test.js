import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideBarForm from '../components/SideBar';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'
import axios from 'axios';
jest.mock('axios');

const props = {
    handleSearch: jest.fn(), 
    handleChange: jest.fn(), 
    query: "random", 
};

describe("SideBarForm", () => {
    it("components renders with correct props", () => {
        const { asFragment } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
    it("renders a form", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const form = getByTestId("sideBarForm");
        expect(form).toBeInTheDocument();
    });
});

describe("form", () => {
    it("calls handleChange and changes the state on any change of input", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const handleChange = props.handleChange;
        const input = getByTestId("input-id"); 
        fireEvent.change(input, { target: { value: "" }});
        expect(handleChange).toHaveBeenCalled();
    });
    it("calls handleSubmit on submission of form", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const handleSearch = props.handleSearch;
        const form = getByTestId("sideBarForm");
        fireEvent.submit(form);
        expect(handleSearch).toHaveBeenCalled();
    })
});