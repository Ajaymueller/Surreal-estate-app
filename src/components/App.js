import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>
      <NavBar />
      <Switch>

        <Route exact path="/" component={Properties}>
          <Properties />
        </Route>

        <Route exact path="/add-property" component={AddProperty}>

          <AddProperty />

        </Route>


      </Switch>
    </div>
  );
}

export default App;
