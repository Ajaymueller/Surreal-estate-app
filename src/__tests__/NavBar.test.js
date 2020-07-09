import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("NavBar", () => {
    it('the page renders correctly against snapshot', () => {
      const history = createMemoryHistory();
      const { asFragment } = render(
        <Router history={history}>
          <NavBar />
        </Router>
      );
      const component = asFragment();
  
      expect(component).toMatchSnapshot();
    });
});