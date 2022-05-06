import React from 'react'
import { NavLink } from "react-router-dom";
import './header.scss';

export default function Header() {
    return (
        <>
           <div className="header-container">
            <NavLink to="/" exact>
            <h1>Coffee Klub.</h1>
            </NavLink>

            <div className="name-and-buttons">
            <nav>
                <ul className="button-container">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                    Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Registration" exact activeClassName="active">
                    Registration
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Basket" exact activeClassName="active">
                    Basket {/*  {basket.length > 0 && basket.length}
                    Basket {basket.length === 0 ? "" : basket.length} */}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/About" exact activeClassName="active">
                    About Us
                    </NavLink>
                </li>
                </ul>
            </nav>
            </div>
        </div> 
        </>
    )
}
