import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home/homePage';
import About from './about/aboutPage';
import NoMatch from './404/404';
import Header from './common/header';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Header />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/about' component={About} />
							<Route path='*' component={NoMatch}/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
