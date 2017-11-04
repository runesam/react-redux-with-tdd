import authorApi from './../api/mockAuthorApi';
import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import beginPromiseCall from './promisesStatusActions';

function loadAuthorsSuccess(authors) {
	return { type: LOAD_AUTHORS_SUCCESS, payload: authors };
}
function loadAuthors() {
	return (dispatch) => {
		dispatch(beginPromiseCall());
		return authorApi.getAllAuthors().then(
			Authors => dispatch(loadAuthorsSuccess(Authors))
		).catch(error => {
			throw (error);
		});
	};
}

export { loadAuthorsSuccess, loadAuthors };
