import React from 'react'

export default function FormInput({handleChange, label, ...otherProps }) {
    return (
        <div className="formRow">
        {label && (<label>{label}</label>)} 

        <input className="formInput" onChange = { handleChange }  {...otherProps} ></input>
        </div>
    )
}
