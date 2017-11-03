import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createCourse } from './../../actions/courseActions';

class CoursesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course: { title: '' }
		};
	}

	onTitleChange = e => {
		const course = this.state.course;
		course.title = e.target.value;
		this.setState({ course });
	};

	onClickSave = () => {
		this.props.createCourse({ title: this.state.course.title });
		console.log(this.props);
	};


	renderCourses() {
		if (this.props.courses && this.props.courses.length > 0) {
			return this.props.courses.map((value, key) => (
				<div key={key}>
					<h4>{value.title}</h4>
				</div>
			));
		}
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>
				<h2>Add Course</h2>
				{this.renderCourses()}
				<input type='text' onChange={this.onTitleChange} value={this.state.course.title} />
				<input type='submit' value='save' onClick={this.onClickSave} />
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


export default connect(mapStateToProps, { createCourse })(CoursesPage);
