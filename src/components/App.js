import React, { useState } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const initialState = { userID: "" };

  const [ userID, setUserID ] = useState(initialState);

  const handleLogin = (response) => {
    setUserID(response.userId)
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserID(""));
  }

  return (
    <div className="App">
      <Router>
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/" component={Properties}>
          <Properties />
        </Route>
        <Route exact path="/add-property" component={AddProperty}>
          <AddProperty />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
