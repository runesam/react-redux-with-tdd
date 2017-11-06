/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CourseForm from './courseForm';

const expect = require('expect.js');

function setup(loading) {
	const props = {
		course: {},
		loading,
		errors: {},
		onSave: () => {
		},
		onChange: () => {
		}
	};
	const renderer = new ShallowRenderer();
	renderer.render(<CourseForm {...props} />);
	const output = renderer.getRenderOutput();
	return {
		props,
		output,
		renderer
	};
}
describe('Course form via React Test Utils', () => {
	it('renders form and h1', () => {
		const { output } = setup();
		expect(output.type).to.be('form');
		const [h1] = output.props.children;
		expect(h1.type).to.be('h1');
	});
	it('save button is labeled "save" when we are not saving', () => {
		const { output } = setup(false);
		const submitButton = output.props.children[5];
		expect(submitButton.props.value).to.be('Save');
	});
	it('save button is labeled "saving..." when we are saving', () => {
		const { output } = setup(true);
		const submitButton = output.props.children[5];
		expect(submitButton.props.value).to.be('Saving...');
	});
});
