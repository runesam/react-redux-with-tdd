import { CREATE_COURSE } from './../actions/actionTypes';

function courseReducer(state = [], action) {
	switch (action.type) {
		case CREATE_COURSE:
			return [...state, action.payload];
		default:
			return state;
	}
}

export default courseReducer;
