import React from 'react';
import { render } from '@testing-library/react';
import SideBar from '../components/SideBar';
import { MemoryRouter } from 'react-router-dom';

describe("sidebar", () => {
    it("renders correctly", () => {
        const { asFragment } = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        expect(asFragment()).toMatchSnapshot();
    });

    /*it("navbar links have option to filter by city and sort by", () => {
        const { getByTestId } = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        const navBarLinks = getByTestId('navbarlinks-id');
        expect(navBarLinks.children.length).toBe(4);
    })*/

    it("navbar links have option to filter by city and sort by", () => {
        const { getByText} = render(
        <MemoryRouter><SideBar /></MemoryRouter>)
        const filterByCity= getByText("Filter by city")
        const sortBy = getByText("Sort by")
        expect(filterByCity).toBeInTheDocument();
        expect(sortBy).toBeInTheDocument();
    })
});