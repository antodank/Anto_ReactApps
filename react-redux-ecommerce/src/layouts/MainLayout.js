import React from 'react'
import Header from './../component/Header'
import Footer from './../component/Footer'

export default function MainLayout(props) {
    return (
        <div>
            <Header {...props} />
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
