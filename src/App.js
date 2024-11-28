import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Navbar from './components/navbar/Navbar';
import HamburgerMenu from './components/hamurgermenu/HamburgerMenu';

function App() {
    return (
        <Router>
            <Navbar />
            {/* <HamburgerMenu /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:name" element={<Category />} />
            </Routes>
        </Router>
    );
}

export default App;
