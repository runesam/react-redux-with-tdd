/* constants */
const CREATE_COURSE = 'CREATE_COURSE';

/* function */
function createCourse(course) {
	return { type: CREATE_COURSE, payload: course };
}

export { CREATE_COURSE, createCourse };
