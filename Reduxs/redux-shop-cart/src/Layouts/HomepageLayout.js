import React from 'react'
import Header from './../components/Header/Header'

export default function HomepageLayout(props) {
    return (
        <div className="fullHeight">
            <Header></Header>
            { props.children}
        </div>
    )
}
