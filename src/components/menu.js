import React from 'react';
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><Link to={'/groups'}>Groups</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
            <li><Link to={'/profile'}>Profile</Link></li>
        </ul>
    );
};

export default Menu;