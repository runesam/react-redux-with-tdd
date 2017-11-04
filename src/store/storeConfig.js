import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

function configureStore(initialState) {
	return createStore(reducers, initialState, applyMiddleware(thunk, middleware));
}

export default configureStore;
