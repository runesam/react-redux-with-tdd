import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';

import StoreConfigure from './store/storeConfig';

import './styles.css';
import App from './components/App';

const Store = StoreConfigure();

render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
