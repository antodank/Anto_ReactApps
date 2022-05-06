import React from 'react';
import Header from './../component/Header';
import Footer from './../component/Footer';

export default function HomepageLayout(props) {
    return (
        <div className="fullHeight">
            <Header {...props} />
            {props.children}
            <Footer />
        </div>
    )
}
