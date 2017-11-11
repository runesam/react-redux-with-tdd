import { LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS, DELETE_COURSE_SUCCESS } from './../actions/actionTypes';
import InitialStates from './initialStates';

function courseReducer(state = InitialStates.courses, action) {
	switch (action.type) {
		case LOAD_COURSES_SUCCESS:
			return action.payload;
		case CREATE_COURSE_SUCCESS:
			return state;
			// return [...state, action.payload]; been removed because of the runtime connection with FireBase DB ... there is no need to update the container state
		case UPDATE_COURSE_SUCCESS:
			return [...state.filter(course => course.id !== action.payload.id), action.payload];
		case DELETE_COURSE_SUCCESS:
			return state;
		default:
			return state;
	}
}

export default courseReducer;
