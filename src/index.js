import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'toastr/build/toastr.min.css';


import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';


import StoreConfigure from './store/storeConfig';


import './styles.css';
import App from './components/App';

const history = createHistory();

const Store = StoreConfigure();


// DBRef.child('courses').set(
// 	[
// 		{
// 			id: 'react-flux-building-applications',
// 			title: 'Building Applications in React and Flux',
// 			watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
// 			authorId: 'cory-house',
// 			length: '5:08',
// 			category: 'JavaScript'
// 		},
// 		{
// 			id: 'clean-code',
// 			title: 'Clean Code: Writing Code for Humans',
// 			watchHref: 'http://www.pluralsight.com/courses/writing-clean-code-humans',
// 			authorId: 'cory-house',
// 			length: '3:10',
// 			category: 'Software Practices'
// 		},
// 		{
// 			id: 'architecture',
// 			title: 'Architecting Applications for the Real World',
// 			watchHref: 'http://www.pluralsight.com/courses/architecting-applications-dotnet',
// 			authorId: 'cory-house',
// 			length: '2:52',
// 			category: 'Software Architecture'
// 		},
// 		{
// 			id: 'career-reboot-for-developer-mind',
// 			title: 'Becoming an Outlier: Reprogramming the Developer Mind',
// 			watchHref: 'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
// 			authorId: 'cory-house',
// 			length: '2:30',
// 			category: 'Career'
// 		},
// 		{
// 			id: 'web-components-shadow-dom',
// 			title: 'Web Component Fundamentals',
// 			watchHref: 'http://www.pluralsight.com/courses/web-components-shadow-dom',
// 			authorId: 'cory-house',
// 			length: '5:10',
// 			category: 'HTML5'
// 		}
// 	]
// );
render(
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
