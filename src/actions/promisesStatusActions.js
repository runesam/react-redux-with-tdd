import { BEGIN_PROMISE_CALL, FINISH_PROMISE_CALL } from './actionTypes';

function beginPromiseCall() {
	return { type: BEGIN_PROMISE_CALL };
}

function finishPromiseCall() {
	return { type: FINISH_PROMISE_CALL };
}
export { beginPromiseCall, finishPromiseCall };
