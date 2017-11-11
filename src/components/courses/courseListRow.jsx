import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseListRow extends Component {
	constructor(props) {
		super(props);
		this.deleteCourse = this.deleteCourse.bind(this);
		this.state = {
			disabled: false
		};
	}
	deleteCourse() {
		this.setState({ disabled: true });
		this.props.deleteCourse(this.props.course.id);
	}
	render() {
		return (
			<tr>
				<td>
					<a href={this.props.course.watchHref} rel='noOpener noReferrer' target='_blank'>Watch</a>
				</td>
				<td>
					<Link to={`/course/${this.props.course.path}`} >{this.props.course.title}</Link>
				</td>
				<td>{this.props.course.authorId}</td>
				<td>{this.props.course.category}</td>
				<td>{this.props.course.length}</td>
				<td>
					<button className='btn btn-danger' onClick={this.deleteCourse} disabled={this.state.disabled}>X</button>
				</td>
			</tr>
		);
	}
}

export default CourseListRow;
