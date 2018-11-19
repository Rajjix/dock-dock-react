import React, { Component } from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/main/home';
import Register from './components/account/register';
import Login from './components/account/login';
import NotFound from './components/main/404';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
