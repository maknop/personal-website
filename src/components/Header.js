import React from 'react';
import {Link} from 'react-router-dom';

/* Import CSS */
import '../css/Header.css';

export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}
