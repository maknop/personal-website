import React from 'react';
import {Link} from 'react-router-dom';

/* Import CSS */
import '../css/Header.css';

import Logo from '../img/profile_picture.jpg'

export default function Header() {
    return (
        <div class="nav-header">
            <Link to="/projects" class="header-buttons">Projects</Link>
            <Link to="/About" class="header-buttons">About</Link>
            <Link to="/" class="header-buttons">Home</Link>
        </div>
    )
}
