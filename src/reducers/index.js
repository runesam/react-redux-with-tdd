import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import CourseReducer from './courseReducer';

const rootReducer = combineReducers({
	courses: CourseReducer,
	router: routerReducer
});

export default rootReducer;
