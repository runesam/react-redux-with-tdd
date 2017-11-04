import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        {' | '}
        <NavLink to='/courses' activeClassName='active'>Courses</NavLink>
        {' | '}        
        <NavLink to='/about' activeClassName='active'>About</NavLink>
    </nav>
);

export default Header;
