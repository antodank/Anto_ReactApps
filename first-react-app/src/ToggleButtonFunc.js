import React, { useState } from 'react'

export default function ToggleButtonFunc() {

    const [currState, setSate] = useState(false);

    const [count, setCounter] = useState(0);


    const handleclick= () =>{
        setSate((state) => !state);

        setCounter((cnt) => { 
        if(currState === false)
        {
          cnt =  cnt + 1;
        } 
        return cnt;
    });

    }

    return (
        <div>
            <h1> Switch ON Count - {count}</h1>
            <button onClick={handleclick}>
                { currState ? "ON" : "OFF" }
            </button>
        </div>
    )
}
