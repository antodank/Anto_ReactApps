import React from 'react'
import { Link } from 'react-router-dom';
import ShopMen from './../../assets/mensuits.jpg'
import ShopWomen from './../../assets/womensuits.jpg'
import './styles.scss';

export default function Directory(props) {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item"
                    style={{
                    backgroundImage: `url(${ShopWomen})`
                    }}>
                    <Link to="/search/womens">
                        Shop Womens
                    </Link>
                </div>
                <div className="item"
                    style={{
                        backgroundImage: `url(${ShopMen})`
                    }}>
                    <Link to="/search/mens">
                        Shop Mens
                    </Link>
                </div>
            </div>
        </div>
    )
}
