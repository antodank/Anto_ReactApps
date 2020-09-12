import React from 'react';
import '../App.css'
import '../navigation.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (

        <nav role="custom-dropdown">
            <h3>
                Company Name
            </h3>
            <ul id="menu">
            <li>
                <Link to="/">
                   Home
                </Link>
            </li>
            <li>
                <Link to="/Shop">
                    Shop
                </Link>
            </li>
            <li>
                <Link to="/About">
                    About
                </Link>
            </li>
            </ul>
        </nav>

    )
}
