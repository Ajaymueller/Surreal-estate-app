import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideBar from '../components/SideBar';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'
import axios from 'axios';
jest.mock('axios');

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

    it("can sort options by ascending or descending", () => {
        const { getByText } = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        const ascending = getByText("Ascending");
        const descending = getByText("Descending");
        expect(ascending).toBeInTheDocument();
        expect(descending).toBeInTheDocument();
    })
});

const handleChange = (event, setter) => {
    setter({
        [event.target.name]: event.target.value 
    })
}

describe("form", () => {
    xit("should have an input", () => {
        const { getByTestId } = render(
            <MemoryRouter><SideBar/></MemoryRouter>)
        const input  = getByTestId("input-id")
        expect(input).toHaveClass("input");
    });
    xit("input should update the state when changed", () => {
        const { getByTestId } = render(
            <MemoryRouter><SideBar/></MemoryRouter>)
        const input = getByTestId("input-id")
        fireEvent.change(input, { target: { value: "random title" }})
        expect(input.value).toBe('random title');
    });
    xit("handleChange should be called onChange", async () => {
        const setSearch = jest.fn();
        const event = {
            target: {
                name: 'foo', 
                value: 'bar',
            },
        }
        handleChange(event, setSearch)
        expect(setSearch).toHaveBeenCalled()
    })
    xit("calls handleSearch function on submit of form", () => {
        const handleSearch = jest.mock();
        const { getByTestId } = render(
            <MemoryRouter><SideBar/></MemoryRouter>)
        fireEvent.submit(getByTestId("form-id"));
        expect(handleSearch).toHaveBeenCalled();
    })
    xit("calls handleSearch function on submission of form", async () => {
        axios.get.mockResolvedValue({
            data: [ {
                title: 'Modern Semi detached', 
                city: 'Liverpool', 
                type: 'semi detached', 
                bathrooms: '3', 
                bedrooms: '4', 
                price: '250000', 
                email: 'random@hotmail.com' 
            }
            ]
        });
    });
});