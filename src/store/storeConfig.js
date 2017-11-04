/* eslint-disable no-underscore-dangle */
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
	return createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(thunk, middleware))
	);
}

export default configureStore;
