import { combineReducers } from 'redux';

import CourseReducer from './courseReducer';

const rootReducer = combineReducers({
	courses: CourseReducer
});

export default rootReducer;
