import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import CoursesList from './coursesList';
import { loadCourses } from './../../actions/courseActions';

class CoursesPage extends Component {
	componentWillMount() {
		this.props.loadCourses();
	}

	deleteCourse(id) {
		this.setState({ activeID: id });
		console.log(id);
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
				{this.renderCourses()}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	console.log(`Those are courses container props: ${ownProps}`);
	return {
		courses: state.courses
	};
}


export default connect(mapStateToProps, { loadCourses })(CoursesPage);
