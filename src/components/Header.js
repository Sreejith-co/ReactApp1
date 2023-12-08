import React from "react";
import './Header.css';

function Header() {
    return (
        <div className='app-header'>
        <span className='header-title'>My App</span>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Sign Up</span>
    </div>
    );
}

export default Header;