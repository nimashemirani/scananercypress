import React from 'react';
import HamburgerMenu from '../hamurgermenu/HamburgerMenu';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>فروشگاه گلابی</h1>
            <HamburgerMenu />
        </nav>
    );
};

export default Navbar;
