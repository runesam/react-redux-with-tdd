import { BEGIN_PROMISE_CALL, FISNISH_PROMISE_CALL } from './../actions/actionTypes';
import InitialState from './initialStates';

function promisesReducer(state = InitialState.PromisesCallsInProgress, action) {
	if (action.type === BEGIN_PROMISE_CALL) {
		return state + 1;
	} else if (action.type.includes('_SUCCESS') || action.type === FISNISH_PROMISE_CALL) {
		return state - 1;
	}
	return state;
}

export default promisesReducer;
