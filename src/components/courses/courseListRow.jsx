import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseListRow extends Component {
	constructor(props) {
		super(props);
		this.deleteCourse = this.props.deleteCourse.bind(this, Object.keys(props.course)[0]);
	}
	componentWillMount() {
		const courseKey = Object.keys(this.props.course)[0];
		const course = this.props.course[courseKey];
		this.setState({ course });
	}
	componentWillReceiveProps(props) {
		const courseKey = Object.keys(props.course)[0];
		const course = props.course[courseKey];
		if (JSON.stringify(course) !== JSON.stringify(this.state.course)) {
			this.setState({ course });
		}
	}
	render() {
		return (
			<tr>
				<td>
					<a href={this.state.course.watchHref} rel='noOpener noReferrer' target='_blank'>Watch</a>
				</td>
				<td>
					<Link to={`/course/${this.state.course.path}`} >{this.state.course.title}</Link>
				</td>
				<td>{this.state.course.authorId}</td>
				<td>{this.state.course.category}</td>
				<td>{this.state.course.length}</td>
				<td>
					<button className='btn btn-danger' onClick={this.deleteCourse}>X</button>
				</td>
			</tr>
		);
	}
}

export default CourseListRow;
