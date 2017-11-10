
module.exports = {
	fireBaseConfig: {
		apiKey: 'AIzaSyBGb0Wk43w2uzM_QJCZiVNACZ01_oxwK00',
		authDomain: 'react-redux-tdd.firebaseapp.com',
		databaseURL: 'https://react-redux-tdd.firebaseio.com',
		projectId: 'react-redux-tdd',
		storageBucket: '',
		messagingSenderId: '671846420991'
	},
	refactorKey: function (key) {
		return key.toString()
			.toLowerCase()
			.replace('-', '_')
			.replace(/\s+/g, '_')
			.replace(/[^w-]+/g, '')
			.replace(/__+/g, '_')
			.replace(/^_+/, '')
			.replace(/_+$/, '');
	},
	refactorObjectToArray: function (obj) {
		return Object.keys(obj).map(key => ({[key]: obj[key]}));
	}
};
