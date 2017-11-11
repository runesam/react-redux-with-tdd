import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import { beginPromiseCall } from './promisesStatusActions';
import generalUtils from './../utils/generalUtils';

const DBRef = generalUtils.getDataBaseReference;

function loadAuthorsSuccess(authors) {
	return { type: LOAD_AUTHORS_SUCCESS, payload: authors };
}
function loadAuthors() {
	return (dispatch) => {
		dispatch(beginPromiseCall());
		return DBRef().child('authors').on('value', authors => dispatch(loadAuthorsSuccess(authors.val())));
	};
}

export { loadAuthorsSuccess, loadAuthors };
