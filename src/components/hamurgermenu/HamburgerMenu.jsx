// ```javascript:src/components/hamurgermenu/HamburgerMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: '#4CAF50' , boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                        style={{ fontSize: '30px' }}
                    >
                        <MenuIcon  fontSize="inherit"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/">صفحه اصلی</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/category/hats">کلاه</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/category/gloves">دستکش</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/category/shirts">تی‌شرت</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/category/socks">جوراب</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/category/glasses">عینک</Link>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default HamburgerMenu;