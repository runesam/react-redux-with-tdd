/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';

import courseReducer from './courseReducer';
import { createCourseSuccess, updateCourseSuccess } from './../actions/courseActions';

describe('Course Reducer', () => {
	it('should add course when passed CREATE_COURSE_SUCCESS', () => {
		const initialState = [
			{ id: 5, title: 'A' },
			{ id: 6, title: 'B' }
		];
		const newCourse = { id: 7, title: 'C' };
		const action = createCourseSuccess(newCourse);
		// act
		const newState = courseReducer(initialState, action);
		// assert
		expect(newState.length).to.equal(3);
		expect(newState[0].title).to.equal('A');
		expect(newState[1].title).to.equal('B');
		expect(newState[2].title).to.equal('C');
	});
	it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
		const initialState = [
			{ id: 5, title: 'A' },
			{ id: 6, title: 'B' }
		];
		const updateCourse = { id: 5, title: 'D' };
		const action = updateCourseSuccess(updateCourse);
		// act
		const updatedState = courseReducer(initialState, action);
		const updatedCourse = updatedState.find(a => a.id === updateCourse.id);
		const unTouchedCourse = updatedState.find(a => a.id === 6);
		// assert
		expect(updatedCourse.title).to.equal('D');
		expect(unTouchedCourse.title).to.equal('B');
	});
});
