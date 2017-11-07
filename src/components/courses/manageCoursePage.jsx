import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { success, error } from 'toastr';

import CourseForm from './courseForm';
import Loader from './../common/loader';

import { loadAuthors } from './../../actions/authorActions';
import { finishPromiseCall } from './../../actions/promisesStatusActions';
import { loadCourses, saveCourse } from './../../actions/courseActions';
import authorsFormattedForDropDownSelector from './../../selectors/selectors';

export class ManageCoursesPage extends Component {
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

	courseFormIsValid() {
		this.formIsValid = true;
		const errors = {};
		if (this.state.course.title.length < 5) {
			errors.title = 'Title must be at least 5 characters.';
			this.formIsValid = false;
		} else {
			delete errors.title;
			this.formIsValid = true;
		}
		this.setState({ errors });
		return this.formIsValid;
	}

	saveCourse(e) {
		e.preventDefault();
		if (!this.courseFormIsValid()) {
			return false;
		}
		this.props.saveCourse(this.state.course).then(() => {
			this.props.history.push('/courses');
			success('Have fun, Your Course Been Saved!', 'Sam Ewdala Says');
		}).catch(errorMessage => {
			this.props.finishPromiseCall();
			error(errorMessage);
		});
	}

	render() {
		if (this.props.numPromises) {
			return <Loader />;
		}
		return (
			<CourseForm
				course={this.state.course}
				errors={this.state.errors}
				onSave={this.saveCourse}
				onChange={this.updateCourseState}
				allAuthors={this.props.authors}
				loading={this.props.numPromises > 0}
			/>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const dummyCourse = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
	const courseId = ownProps.match.params.courseId;
	const authorsFormattedForDropDown = authorsFormattedForDropDownSelector(state.authors);
	function findCourse(courses, id) {
		const result = courses.filter(course => course.id === id)[0];
		return result && result.title ? result : dummyCourse;
	}

	return {
		courses: state.courses,
		authors: authorsFormattedForDropDown,
		course: courseId && state.courses.length > 0 ? findCourse(state.courses, courseId) : dummyCourse,
		numPromises: state.numPromises
	};
}

export default withRouter(connect(mapStateToProps, {
	loadCourses,
	loadAuthors,
	saveCourse,
	finishPromiseCall
})(ManageCoursesPage));
