import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './routes';
import {NavLink as Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-header">The contacts app<span className="login"><Link id="login" to="/contacts">Login</Link></span></div>
          <Main />
        </div>
      </Router>
    );
  }
}
export default App;
