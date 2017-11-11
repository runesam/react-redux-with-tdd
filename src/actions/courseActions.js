import generalUtils from './../utils/generalUtils';

import {
	LOAD_COURSES_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	CREATE_COURSE_SUCCESS,
	DELETE_COURSE_SUCCESS
} from './actionTypes';

import { beginPromiseCall } from './promisesStatusActions';

const DBRef = generalUtils.getDataBaseReference;

function loadCoursesSuccess(courses) {
	const refactorObject = generalUtils.refactorObjectToArray(courses);
	return { type: LOAD_COURSES_SUCCESS, payload: refactorObject };
}

function updateCourseSuccess(course) {
	return { type: UPDATE_COURSE_SUCCESS, payload: course };
}

function createCourseSuccess(course) {
	return { type: CREATE_COURSE_SUCCESS, payload: course };
}

function deleteCourseSuccess() {
	return { type: DELETE_COURSE_SUCCESS }
}

/* ------------------------- */

function loadCourses() {
	return (dispatch) => {
		return DBRef().child('courses').on('value', courses => dispatch(loadCoursesSuccess(courses.val())));
	};
}

function saveCourse(course) {
	return (dispatch) => {
		const newCourse = course;
		dispatch(beginPromiseCall());
		if (newCourse.id || newCourse.id === 0) {
			// DBRef.child('courses').push(newCourse);
			return generalUtils.updateInDB(`courses/${newCourse.id}`, newCourse).then(() => {
				dispatch(createCourseSuccess(newCourse));
			}).catch(error => console.log(error));
		} else {
			// 	const courseRef = DBRef.child(`courses/${newCourse.id}`);
			// 	courseRef.set(newCourse);
			newCourse.path = generalUtils.refactorKey(newCourse.title);
			return generalUtils.addToDB('courses', newCourse).then(data => {
				newCourse.id = data.name;
				dispatch(createCourseSuccess(newCourse));
			}).catch(error => console.log(error));
		}
	};
}

function deleteCourse(courseKey) {
	return (dispatch) => {
		dispatch(beginPromiseCall());
		return generalUtils.deleteFromDB(`courses/${courseKey}`).then(() => {
			dispatch(deleteCourseSuccess(courseKey));
		}).catch(error => console.log(error));
	};
}

// DBRef.child('courses').set(
// 	{
// 		0: {
// 			id: 0,
// 			path: 'react-flux-building-applications',
// 			title: 'Building Applications in React and Flux',
// 			watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
// 			authorId: 'cory-house',
// 			length: '5:08',
// 			category: 'JavaScript'
// 		},
// 		1: {
// 			id: 1,
// 			path: 'clean-code',
// 			title: 'Clean Code: Writing Code for Humans',
// 			watchHref: 'http://www.pluralsight.com/courses/writing-clean-code-humans',
// 			authorId: 'cory-house',
// 			length: '3:10',
// 			category: 'Software Practices'
// 		},
// 		2: {
// 			id: 2,
// 			path: 'architecture',
// 			title: 'Architecting Applications for the Real World',
// 			watchHref: 'http://www.pluralsight.com/courses/architecting-applications-dotnet',
// 			authorId: 'cory-house',
// 			length: '2:52',
// 			category: 'Software Architecture'
// 		},
// 		3: {
// 			id: 3,
// 			path: 'career-reboot-for-developer-mind',
// 			title: 'Becoming an Outlier: Reprogramming the Developer Mind',
// 			watchHref: 'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
// 			authorId: 'cory-house',
// 			length: '2:30',
// 			category: 'Career'
// 		},
// 		4: {
// 			id: 4,
// 			path: 'web-components-shadow-dom',
// 			title: 'Web Component Fundamentals',
// 			watchHref: 'http://www.pluralsight.com/courses/web-components-shadow-dom',
// 			authorId: 'cory-house',
// 			length: '5:10',
// 			category: 'HTML5'
// 		}
// 	}
// );

export {
	// success cases
	loadCoursesSuccess,
	updateCourseSuccess,
	createCourseSuccess,
	deleteCourseSuccess,
	// cores
	loadCourses,
	deleteCourse,
	saveCourse
};
