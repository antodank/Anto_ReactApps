import React,{useState,useEffect,useRef} from 'react'

export default function Refhook() {
    // Store the input's value in state
  const [value, setValue] = useState("");

  // Store a reference to the input's DOM node
    const inputRef = useRef();

    useEffect(
        () => { 
          // This runs AFTER the first render, so the ref is set by now.
          console.log("render");
          inputRef.current.focus();
        },
        // The effect "depends on" inputRef
        [inputRef]
      );

    return (
        <div>
            <div>{value}</div>
            <div>
                <label>User Name</label>
                <input onChange={e => setValue(e.target.value)} value={value}></input>
            </div>
            <div>
                <label>Email ID</label>
                <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value}></input>
            </div>
            
        </div>
    )
}
