import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import CourseForm from './courseForm';

const expect = require('expect.js');

function setup() {
	const props = {
		course: {},
		saving: false,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};
	const renderer = ReactTestUtils.createRenderer();
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
		expect(output.type).toBe('form');
	});
});
