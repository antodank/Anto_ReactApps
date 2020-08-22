import React,{useState} from 'react';

export default function CounterApp() {

    const [clickCount, counterState] = useState(0);

    function increametClick()
    {
        counterState((cnt) => cnt + 1 );
    } 
  
    function decreamentClick()
    {
        counterState((cnt) => cnt - 1 );
    }

    return (
     <div>
        <button id="btnplus" onClick={increametClick} >+</button>
        <span>{clickCount}</span>
        <button id="btnminus" onClick ={decreamentClick}>-</button>
      </div>
    );
}
