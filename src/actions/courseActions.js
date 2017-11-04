import courseApi from './../api/mockCourseApi';
import { LOAD_COURSES_SUCCESS } from './actionTypes';

function loadCoursesSuccess(courses) {
	return { type: LOAD_COURSES_SUCCESS, payload: courses };
}
function loadCourses() {
	return function (dispatch) {
		return courseApi.getAllCourses().then(
			courses => dispatch(loadCoursesSuccess(courses))
		).catch(error => {
			throw (error);
		});
	};
}

export { loadCoursesSuccess, loadCourses };
