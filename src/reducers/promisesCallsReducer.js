import {
	BEGIN_PROMISE_CALL,
	FINISH_PROMISE_CALL,
	LOAD_AUTHORS_SUCCESS,
	LOAD_COURSES_SUCCESS
} from './../actions/actionTypes';
import InitialState from './initialStates';

function promisesReducer(state = InitialState.numPromises, action) {
	if (action.type === BEGIN_PROMISE_CALL) {
		return state + 1;
	} else if ((action.type !== LOAD_AUTHORS_SUCCESS && action.type !== LOAD_COURSES_SUCCESS && action.type.includes('_SUCCESS')) || action.type === FINISH_PROMISE_CALL) {
		return state - 1;
	}
	return state;
}

export default promisesReducer;
