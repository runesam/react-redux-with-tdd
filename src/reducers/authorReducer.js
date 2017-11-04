import { LOAD_AUTHORS_SUCCESS } from './../actions/actionTypes';
import InitialStates from './initialStates';

function authorReducer(state = InitialStates.authors, action) {
	switch (action.type) {
		case LOAD_AUTHORS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}

export default authorReducer;
