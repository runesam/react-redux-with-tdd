/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import authorsFormattedForDropDownSelector from './selectors';

describe('Author Selectors', () => {
	describe('authorsFormattedForDropDownSelector', () => {
		it('should return author data formatted for user in a dropdown', () => {
			const authors = [
				{
					id: 'dan-wahlin',
					firstName: 'Dan',
					lastName: 'Wahlin'
				},
				{
					id: 'sam-ewdala',
					firstName: 'Sam',
					lastName: 'Ewdala'
				}
			];
			const expected = [
				{
					value: 'dan-wahlin',
					text: 'Dan Wahlin'
				},
				{
					value: 'sam-ewdala',
					text: 'Sam Ewdala'
				}
			];
			expect(authorsFormattedForDropDownSelector(authors)).to.deep.equal(expected);
		});
	});
});
