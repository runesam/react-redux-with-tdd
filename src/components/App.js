import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home/homePage';
import About from './about/aboutPage';
import NoMatch from './404/404';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about/:customId' component={About} />
					<Route path='*' component={NoMatch}/>
				</Switch>
			</Router>
		);
	}
}

export default App;
