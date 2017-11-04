import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'toastr/build/toastr.min.css';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';


import StoreConfigure from './store/storeConfig';

import './styles.css';
import App from './components/App';

const history = createHistory();

const Store = StoreConfigure();

render(
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
