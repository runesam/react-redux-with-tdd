/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ManageCoursesPage } from './manageCoursePage';


configure({ adapter: new Adapter() });

describe('Manage Course Page', () => {
	it('sets error message when trying to save empty title', () => {
		const props = {
			authors: [],
			courses: [],
			saveCourse: () => Promise.resolve(),
			loadAuthors: () => Promise.resolve(),
			loadCourses: () => Promise.resolve(),
			finishPromiseCall: () => Promise.resolve(),
			course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
		};
		const wrapper = mount(<ManageCoursesPage {...props} />);
		const saveButton = wrapper.find('input').last();
		expect(saveButton.prop('type')).to.equal('submit');
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).to.equal('Title must be at least 5 characters.');
	});
});
