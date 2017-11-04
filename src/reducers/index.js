import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import CourseReducer from './courseReducer';
import AuthorReducer from './authorReducer';

const rootReducer = combineReducers({
	courses: CourseReducer,
	authors: AuthorReducer,
	router: routerReducer
});

export default rootReducer;
