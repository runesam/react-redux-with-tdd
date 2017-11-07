function authorsFormattedForDropDown(authors) {
	return authors.map(author => ({
		value: author.id,
		text: `${author.firstName} ${author.lastName}`
	}));
}

export default authorsFormattedForDropDown;
