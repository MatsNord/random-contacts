import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {NavLink as Link} from 'react-router-dom';
import store from './store'
import Main from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="app-header">The contacts app<span className="login"><Link id="login" to="/contacts">Login</Link></span></div>
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
