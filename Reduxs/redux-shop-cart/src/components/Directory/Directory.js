import React from 'react'
import ShopMen from '../../resource/men.jpg';
import ShopWomen from './../../resource/women.jpg';
import './styles.scss';

export default function Directory() {
    return (
        <div className="directory">
            <div className="wrap">
                <div className = "item" style={{ backgroundImage: `url(${ShopMen})`}}>
                    <a>Men</a>
                </div>
                <div className = "item" style={{ backgroundImage: `url(${ShopWomen})`}}>
                    <a>Women</a>
                </div>
            </div>
        </div>
    )
}
