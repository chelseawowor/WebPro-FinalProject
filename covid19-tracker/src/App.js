import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Global from "./KomponenHalaman/Global";
import Indo from "./KomponenHalaman/Indo";
import Provinsi from "./KomponenHalaman/Provinsi";

const App = (props) => {
  return (
    <div className="App">
        <h1>Covid Tracker</h1>
        <Router>
          <div>
            <nav>
            <ul>
              <li>
                <Link to="/global">Global</Link>
              </li>
              <li>
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/provinsi">Provinsi</Link>
              </li>
            </ul>
            </nav>
          <Switch>
            <Route path="/global">
            <Global />
            </Route>
            <Route path="/indonesia">
            <Indo />
            </Route>
            <Route path="/provinsi">
            <Provinsi />
            </Route>
          </Switch>
          </div>
        </Router>
    </div>
  );
};

export default App;
