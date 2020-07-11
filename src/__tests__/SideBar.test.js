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

    it("has list with different city options", () => {
        const { getByText } = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        const Manchester = getByText("Manchester")
        const Leeds = getByText("Leeds")
        const Sheffield = getByText("Sheffield")
        const Liverpool = getByText("Liverpool")
        expect(Manchester).toBeInTheDocument();
        expect(Leeds).toBeInTheDocument();
        expect(Sheffield).toBeInTheDocument();
        expect(Liverpool).toBeInTheDocument();
    })

    it("sorts by ascending or descending", () => {
        const { getByText } = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        const ascending = getByText("Ascending");
        const descending = getByText("Descending");
        expect(ascending).toBeInTheDocument();
        expect(descending).toBeInTheDocument();
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