import authorApi from './../api/mockAuthorApi';
import { LOAD_AUTHORS_SUCCESS } from './actionTypes';

function loadAuthorsSuccess(authors) {
	return { type: LOAD_AUTHORS_SUCCESS, payload: authors };
}
function loadAuthors() {
	return function (dispatch) {
		return authorApi.getAllAuthors().then(
			Authors => dispatch(loadAuthorsSuccess(Authors))
		).catch(error => {
			throw (error);
		});
	};
}

export { loadAuthorsSuccess, loadAuthors };
