import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideBar from '../components/SideBar';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'

describe("sidebar", () => {
    it("renders correctly", () => {
        const { asFragment } = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        expect(asFragment()).toMatchSnapshot();
    });

    it("navbar links have option to filter by city and sort by", () => {
        const { getByText } = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        const filterByCity= getByText("Filter by city")
        const sortBy = getByText("Sort by")
        expect(filterByCity).toBeInTheDocument();
        expect(sortBy).toBeInTheDocument();
    })
});

describe("form", () => {
    it("should have an input", () => {
        const { getByTestId } = render(
            <MemoryRouter><SideBar/></MemoryRouter>)
        const input  = getByTestId("input-id")
        expect(input).toHaveClass("input");
    });
    it("input should update the state when changed", () => {
        const { getByTestId } = render(
            <MemoryRouter><SideBar/></MemoryRouter>)
        const input = getByTestId("input-id")
        fireEvent.change(input, { target: { value: "random title" }})
        expect(input.value).toBe('random title');
    });
    xit("calls handleSearch function on submit of form", () => {
        const handleSearch = jest.fn();
        const { getByTestId } = render(
            <MemoryRouter><SideBar/></MemoryRouter>)
        fireEvent.submit(getByTestId("form-id"));
        expect(handleSearch).toHaveBeenCalled();
    })
});;