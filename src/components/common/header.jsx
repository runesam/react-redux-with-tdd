import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        {' | '}
        <NavLink to='/cources' activeClassName='active'>Cources</NavLink>
        {' | '}        
        <NavLink to='/about' activeClassName='active'>About</NavLink>
    </nav>
);

export default Header;
