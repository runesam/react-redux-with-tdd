/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import { createStore } from 'redux';

import rootReducer from './../reducers';
import initialState from './../reducers/initialStates';
import { updateCourseSuccess, createCourseSuccess } from './../actions/courseActions';

describe('Store', () => {
	it('Should handle creating courses', () => {
		const store = createStore(rootReducer, initialState);
		const course = {
			title: 'Clean Code'
		};

		const action = createCourseSuccess(course);
		store.dispatch(action);
		const actual = store.getState().courses[0];
		const expected1 = {
			title: 'Clean Code'
		};
		expect(actual).to.deep.equal(expected1);

		actual.title = 'Sam Ewdala';
		store.dispatch(updateCourseSuccess(actual));
		const updated = store.getState().courses[0];
		const expected2 = {
			title: 'Sam Ewdala'
		};
		expect(updated).to.deep.equal(expected2);
	});
});
