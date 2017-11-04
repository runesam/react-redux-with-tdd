import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import CourseReducer from './courseReducer';
import AuthorReducer from './authorReducer';
import PromisesCallsReducer from './promisesCallsReducer';

const rootReducer = combineReducers({
	courses: CourseReducer,
	authors: AuthorReducer,
	numPromises: PromisesCallsReducer,
	router: routerReducer
});

export default rootReducer;
