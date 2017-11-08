import courseApi from './../api/mockCourseApi';
import {
	LOAD_COURSES_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	CREATE_COURSE_SUCCESS
} from './actionTypes';

import { beginPromiseCall } from './promisesStatusActions';

function loadCoursesSuccess(courses) {
	return { type: LOAD_COURSES_SUCCESS, payload: courses };
}

function updateCourseSuccess(course) {
	return { type: UPDATE_COURSE_SUCCESS, payload: course };
}

function createCourseSuccess(course) {
	return { type: CREATE_COURSE_SUCCESS, payload: course };
}

function loadCourses() {
	return (dispatch) => {
		dispatch(beginPromiseCall());
		return courseApi.getAllCourses().then(
			courses => dispatch(loadCoursesSuccess(courses))
		).catch(error => {
			throw (error);
		});
	};
}

function saveCourse(course) {
	return (dispatch) => {
		dispatch(beginPromiseCall());
		return courseApi.saveCourse(course).then(savedCourse => {
			dispatch(course.id ? updateCourseSuccess(savedCourse) : createCourseSuccess(savedCourse));
		}).catch(error => {
			throw (error);
		});
	};
}

export {
	// success cases
	loadCoursesSuccess,
	updateCourseSuccess,
	createCourseSuccess,
	// cores
	loadCourses,
	saveCourse
};
