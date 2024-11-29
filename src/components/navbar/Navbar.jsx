import React from 'react';
import HamburgerMenu from '../hamurgermenu/HamburgerMenu';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1 data-cy="store-title">فروشگاه گلابی</h1>
            <HamburgerMenu data-cy="hamburger-menu"/>
        </nav>
    );
};

export default Navbar;
