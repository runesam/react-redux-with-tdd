import { LOAD_COURSES_SUCCESS } from './../actions/actionTypes';

function courseReducer(state = [], action) {
	switch (action.type) {
		case LOAD_COURSES_SUCCESS:
			return [...state, ...action.payload];
		default:
			return state;
	}
}

export default courseReducer;
