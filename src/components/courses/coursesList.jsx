import React from 'react';

import CourseListRow from './courseListRow.jsx';

const CourseList = ({ courses, deleteCourse }) => (
	<table>
		<thead>
			<tr>
				<th>&nbsp;</th>
				<th>Title</th>
				<th>Author</th>
				<th>Category</th>
				<th>Length</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{courses.map(course => <CourseListRow key={course.id} course={course} deleteCourse={deleteCourse} />)}
		</tbody>
	</table>
);

export default CourseList;
