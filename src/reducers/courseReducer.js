import { LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS } from './../actions/actionTypes';
import InitialStates from './initialStates';

function courseReducer(state = InitialStates.courses, action) {
	switch (action.type) {
		case LOAD_COURSES_SUCCESS:
			return action.payload;
		case CREATE_COURSE_SUCCESS:
			return [...state, action.payload];
		case UPDATE_COURSE_SUCCESS:
			return [...state.filter(course => course.id !== action.payload.id), action.payload];
		default:
			return state;
	}
}

export default courseReducer;
