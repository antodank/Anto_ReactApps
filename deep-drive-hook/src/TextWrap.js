import React, { useState } from 'react'

export default function TextWrap({text,maxLength}) {

    const [hidden, setHidden] = useState(true);

    if(text.length <= maxLength)
    {
        return <span>{text}</span>;
    }
    
    return (
        <div>
            <span>
            {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
            {hidden ? (
                <a onClick={() => setHidden(false)}> read more</a>
            ) : (
                <a onClick={() => setHidden(true)}> read less</a>
            )}
            </span>
        </div>
    )
}
