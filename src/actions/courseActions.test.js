/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import { loadCourses, createCourseSuccess } from './courseActions';
import { BEGIN_PROMISE_CALL, LOAD_COURSES_SUCCESS, CREATE_COURSE_SUCCESS } from './actionTypes';

describe('Course Actions', () => {
	describe('createCourseSuccess', () => {
		it('should create a CREATE_COURSE_SUCCESS action', () => {
			const course = { id: 'clean-code', title: 'Clean Code' };
			const expectedAction = {
				type: CREATE_COURSE_SUCCESS,
				payload: course
			};

			const action = createCourseSuccess(course);
			expect(action).to.deep.equal(expectedAction);
		});
	});
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async Actions', () => {
	afterEach(() => nock.cleanAll());
	it('should create BEGIN_PROMISE_CALL and LOAD_COURSES_SUCCESS when load courses', callback => {
		// nock('http://example.com/').get('/courses').reply(201, {body: { courses: [{id: 'clean-code', title: 'Clean Code'}]}});
		const store = mockStore({ courses: [] });
		store.dispatch(loadCourses()).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).to.equal(BEGIN_PROMISE_CALL);
			expect(actions[1].type).to.equal(LOAD_COURSES_SUCCESS);
			expect(actions[1].payload.length).to.equal(5); /* I expected the number as it simulate the courses in the mok api */
			callback();
		});
	});
});
