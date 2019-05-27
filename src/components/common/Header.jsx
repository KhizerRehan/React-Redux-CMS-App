import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const activeStyles = {
        color: 'red'
    };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyles} exact>Home</NavLink> {" | "}
            <NavLink to="/courses" activeStyle={activeStyles} exact>Courses</NavLink> {" | "}
            <NavLink to="/about" activeStyle={activeStyles}>About</NavLink>
        </nav>
    )
};

export default Header;