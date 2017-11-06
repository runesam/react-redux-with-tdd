/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseForm from './courseForm';

configure({ adapter: new Adapter() });

function setup(loading) {
	const props = {
		course: {},
		loading,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};
	return shallow(<CourseForm {...props} />);
}

describe('Course form via enzyme', () => {
	it('renders form and h1', () => {
		const wrapper = setup(false);
		expect(wrapper.find('form').length).to.equal(1);
		expect(wrapper.find('h1').text()).to.equal('Manage Course');
	});
	it('save button is labeled "save" when we are not saving', () => {
		const wrapper = setup(false);
		expect(wrapper.find('input').props().value).to.equal('Save');
	});
	it('save button is labeled "saving..." when we are saving', () => {
		const wrapper = setup(true);
		expect(wrapper.find('input').props().value).to.equal('Saving...');
	});
});
