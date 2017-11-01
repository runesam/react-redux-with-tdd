import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default () => (
    <div className='home'>
        <Link to='/about/5'>
            Read more about us
        </Link>
        <br />
        <Link to='/about/6'>
            Read more about us
        </Link>
    </div>
);