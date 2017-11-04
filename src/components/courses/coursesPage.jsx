import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './styles.css';

import CoursesList from './coursesList';
import { loadCourses } from './../../actions/courseActions';
import { loadAuthors } from './../../actions/authorActions';

class CoursesPage extends Component {
	constructor(props) {
		super(props);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	componentWillMount() {
		if (this.props.courses.length < 1) {
			this.props.loadCourses();
		}
		if (this.props.authors.length < 1) {
			this.props.loadAuthors();
		}
	}

	deleteCourse(id) {
		this.setState({ activeID: id });
		console.log(id);
	}

	redirectToAddCoursePage() {
		this.props.history.push('/course/create');
	}

	renderCourses() {
		if (this.props.courses && this.props.courses.length > 0) {
			return <CoursesList courses={this.props.courses} deleteCourse={this.deleteCourse} />;
		}
	}

	render() {
		return (
			<div className='courses_container'>
				<h1>Courses</h1>
				<input
					type='button'
					value='Add New Course'
					className='btn btn-primary'
					onClick={this.redirectToAddCoursePage}
				/>
				{this.renderCourses()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		courses: state.courses,
		authors: state.authors
	};
}


export default withRouter(connect(mapStateToProps, { loadCourses, loadAuthors })(CoursesPage));
