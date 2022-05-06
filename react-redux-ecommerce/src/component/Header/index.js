import React,{ useState, useEffect } from 'react'
import { Link, useLocation  } from 'react-router-dom';
import './styles.scss'
import Logo from './../../assets/logo.png';

export default function Header(props) {
    return (
        <header  className="header">
           <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="SimpleTut LOGO" />
                    </Link>
                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header >
    )
}
