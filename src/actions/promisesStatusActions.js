import { BEGIN_PROMISE_CALL, FISNISH_PROMISE_CALL } from './actionTypes';

function beginPromiseCall() {
	return { type: BEGIN_PROMISE_CALL };
}

function finishPromiseCall() {
	return { type: FISNISH_PROMISE_CALL };
}
export { beginPromiseCall, finishPromiseCall };
