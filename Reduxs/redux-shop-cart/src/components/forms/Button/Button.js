import React from 'react'

export default function Button({ children, ...otherProps }) {
    return (
        <button className="btn" {...otherProps} >
            {children}
        </button>
    )
}
