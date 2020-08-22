// type rfc
import React from 'react'

export default function FirstComponent(props) {
    function showMyName()
    {
            return "Hello " + props.name;
    }
    return (
        <div>
            {showMyName()}
        </div>
    )
}
