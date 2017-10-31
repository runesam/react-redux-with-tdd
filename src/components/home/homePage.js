import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className='runesam'>
                <h1>Control Panel Administrator</h1>
                <p>React, Redux and React Router in ES6 for web apps.</p>
                <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
            </div>
        );
    }
}

export default HomePage;