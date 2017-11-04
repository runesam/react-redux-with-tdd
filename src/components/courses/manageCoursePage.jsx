import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CourseForm from './courseForm';
import { loadAuthors } from './../../actions/authorActions';
import { loadCourses, saveCourse } from './../../actions/courseActions';

class ManageCoursesPage extends Component {
	constructor(props) {
		super(props);
		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
		this.state = {
			course: this.props.course,
			errors: {}
		};
	}

	componentWillMount() {
		if (this.props.courses.length < 1) {
			this.props.loadCourses();
		}
		if (this.props.authors.length < 1) {
			this.props.loadAuthors();
		}
	}

	componentWillReceiveProps(props) {
		if (props.course.id !== this.state.course.id) {
			this.setState({ course: props.course });
		}
	}

	updateCourseState(e) {
		const field = e.target.name;
		const course = Object.assign({}, this.state.course);
		course[field] = e.target.value;
		return this.setState({ course });
	}

	saveCourse(e) {
		e.preventDefault();
		this.props.saveCourse(this.state.course).then(() => {
			this.props.history.push('/courses');
		});
	}

	render() {
		return <CourseForm course={this.state.course} errors={this.state.errors} onSave={this.saveCourse} onChange={this.updateCourseState} allAuthors={this.props.authors} />;
	}
}

function mapStateToProps(state, ownProps) {
	const dummyCourse = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
	const courseId = ownProps.match.params.courseId;
	const authorsFormattedForDropDown = state.authors.map(author => ({ value: author.id, text: `${author.firstName} ${author.lastName}` }));
	return {
		courses: state.courses,
		authors: authorsFormattedForDropDown,
		course: courseId && state.courses.length > 0 ? state.courses.filter(course => course.id === courseId)[0] : dummyCourse
	};
}

export default withRouter(connect(mapStateToProps, { loadCourses, loadAuthors, saveCourse })(ManageCoursesPage));
