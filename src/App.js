import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Navigation from './constants/Navigation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
    </div>
  </Router>
);

export default App;
