import React from 'react'
import img from '../../resource/item.png'
import "../Item/Item.scss";

export default function Item({ productDetails, button }) {

    const { id, name, price } = productDetails;

    return (
        <div key={id} className="item">
            <img src={img} alt="abc" />
            <p className="name">{name}</p>
            <p className="price">₹{price}</p>
        </div>
    )
}
