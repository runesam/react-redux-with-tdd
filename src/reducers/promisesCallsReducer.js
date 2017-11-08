import { BEGIN_PROMISE_CALL, FISINISH_PROMISE_CALL } from './../actions/actionTypes';
import InitialState from './initialStates';

function promisesReducer(state = InitialState.numPromises, action) {
	if (action.type === BEGIN_PROMISE_CALL) {
		return state + 1;
	} else if (action.type.includes('_SUCCESS') || action.type === FISINISH_PROMISE_CALL) {
		return state - 1;
	}
	return state;
}

export default promisesReducer;
