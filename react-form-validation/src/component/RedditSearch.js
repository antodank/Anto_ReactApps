import React, { useState } from 'react'
import Reddit from './Reddit'

export default function RedditSearch() {
    const [input, setinput] = useState("");
    const [subredditval, setsubredditval] = useState("")

    const handleSublit = e =>
    {
        e.preventDefault();
        setsubredditval(input);
    }

    return (
        <>
            <form onSubmit={handleSublit}>
                <input value={input} onChange={e => setinput(e.target.value)}></input>
                <Reddit subreddit = {subredditval}></Reddit>
            </form>
        </>
    )
}
