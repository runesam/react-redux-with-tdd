import fireBase from 'firebase';
import courseApi from './../api/mockCourseApi';

import generalUtils from './../utils/generalUtils';

import {
	LOAD_COURSES_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	CREATE_COURSE_SUCCESS
} from './actionTypes';

import { beginPromiseCall } from './promisesStatusActions';

fireBase.initializeApp(generalUtils.fireBaseConfig);
const DBRef = fireBase.database().ref();

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
		return DBRef.child('courses').on('value', courses => dispatch(loadCoursesSuccess(courses.val())));
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
