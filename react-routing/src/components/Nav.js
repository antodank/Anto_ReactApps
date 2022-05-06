import React from 'react';
import '../App.css';
import './css/navigation.css';
import { Link } from 'react-router-dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export default function Nav() {

    const navstyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>
                Company Name
            </h3>
            <ul className="nav-links">
            <li>
                <Link style={navstyle} to="/">
                   Home
                </Link>
            </li>
            <li>
                <Link style={navstyle}  to="/Shop">
                    Shop
                </Link>
            </li>
            <li>
                <Link style={navstyle}  to="/Register">
                    Register
                </Link>
            </li>
            <li>
                <Link style={navstyle}  to="/About">
                    About
                </Link>
            </li>
            </ul>
        </nav>

    )
}
