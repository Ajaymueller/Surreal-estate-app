import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideBar from '../components/SideBar';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'
import axios from 'axios';
jest.mock('axios');
import { Link } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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

describe("with router", () => {
    it("Link matches snapshot", () => {
    const { asFragment } = render(
    <MemoryRouter><SideBar /></MemoryRouter>)
    })

})

describe("Link", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow (<MemoryRouter><SideBar /></MemoryRouter>);
    })
    xit("should contain 6 Link components", () => {
        expect(wrapper.find(Link)).toBeInTheDocument();
    });
});