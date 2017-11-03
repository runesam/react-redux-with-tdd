import { CREATE_COURSE } from './actionTypes';

function createCourse(course) {
	return { type: CREATE_COURSE, payload: course };
}

export { createCourse };
