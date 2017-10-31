import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';

const Asdasd = () => (
    <BrowserRouter>
        <div>
            <Route path='/' component={HomePage} />
            <Route path='about' component={AboutPage} />
        </div>
    </BrowserRouter>
);

export default Asdasd;