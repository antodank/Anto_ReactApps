import React from 'react'
import Header from './../components/Header/Header'

export default function MainLayout(props) {
    return (
        <div>
            <Header></Header>
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}
