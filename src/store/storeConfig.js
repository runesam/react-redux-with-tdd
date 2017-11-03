import { createStore, applyMiddleware } from 'redux';

import reducers from './../reducers';

function configureStore(initialState) {
	return createStore(reducers, initialState, applyMiddleware());
}

export default configureStore;
