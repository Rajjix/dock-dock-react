import React, { Component } from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/main/home';
import NotFound from './components/main/404';
import * as actions from './store/actions/auth';

import './App.css';

class App extends Component {
	render() {
		return (
			<div {...this.props}>
				<BrowserRouter>
					<Switch>
					  <Route path="/" exact component={Home} />
					  <Route component={NotFound} />
					</Switch>
			  </BrowserRouter>
			</div>
		);
	}
}

export default App;
