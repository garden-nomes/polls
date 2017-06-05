import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AuthSuccess from './AuthSuccess';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/auth/success" component={AuthSuccess} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default Routes;
