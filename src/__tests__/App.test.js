import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';
import Properties from '../components/Properties';
import AddProperty from '../components/AddProperty'; 
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe("App", () => {
    xit("component renders correctly", () => {
    const { asFragment } = render(
    <MemoryRouter><App /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    })
})

describe("With React router", () => {
    xit("renders Properties and AddProperty component", () => {
    const { getByText, getByTestId } = render(
    <MemoryRouter><App /></MemoryRouter> )
    fireEvent.click(getByText(/properties/i));
    fireEvent.click(getByText(/add a property/i));
    expect(getByTestId("properties")).toBeInTheDocument();
    expect(getByTestId("AddProperty")).toBeInTheDocument();
    });
});

describe("routes", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />);
    })
    xit("should contain a Properties component", () => {
        expect(wrapper.find(Properties)).toHaveLength(1);
    });
    xit("should contain AddProperty component", () => {
        expect(wrapper.find(AddProperty)).toHaveLength(1);
    })
    xit("should contain 2 route components", () => {
        expect(wrapper.find(Route)).toHaveLength(2)
    });
});

describe("routes using memory router", () => {
    xit("should show properties component for / route", () => {
    const component = mount ( <MemoryRouter initialentries="{['/']}">
    <App/> </MemoryRouter> )
    expect(component.find(Properties)).toHaveLength(1);
    });
    xit("should show AddProperty component for /add-property", () => {
    const component = mount ( <MemoryRouter initialentries="{['/add-property']}">
    <App/> </MemoryRouter> )
    expect(component.find(AddProperty)).toHaveLength(1);
    })
})