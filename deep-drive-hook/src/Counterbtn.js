import React,{useState,useEffect} from 'react'

export default function Counterbtn() {

    const [countstate, setcountstate] = useState(0);
    const [isON, setONState] = useState(false);
    const [timer, setTimer] = useState(0);


    const showCount = () =>
    {
        alert(`Counter - ${countstate}`);
    }

    const handleAfterClick = () => {
        setTimeout(() => {
          alert(`After Counter - ${countstate}`);
        }, 5000);
      }

      useEffect(() => {
        console.log('mounted');
        return () => console.log('unmounting...');
      },[countstate]) 
      
      useEffect(() => {
        let interval;
     
        if (isON) {
          interval = setInterval(() => {
              console.log('tick');
              setTimer(timer => timer + 1);}, 1000);
        }
     
        return () => clearInterval(interval);
      }, [isON,timer]);

      const onReset = () => {
        setONState(false);
        setTimer(0);
      };

    return (
        <div>
            <div><h1>{countstate}</h1></div>
            <button onClick={showCount} >Show me the count</button>
            <button onClick={() => setcountstate(countstate + 1)}>Counter+</button>
            <button onClick={() => setcountstate(countstate - 1)}>Counter-</button>
            <button onClick={handleAfterClick} >Count after 5 sec</button>
            <div>Timer - {timer}</div>
            <div>
                { !isON && <button onClick={() => setONState(true)} >ON</button>}
                { isON && <button onClick={() => setONState(false)} >OFF</button>}
                <button type="button" disabled={timer === 0} onClick={onReset}>Reset</button>
            </div>
            <div>
              <button onClick={console.log("Button clicked")}>Useless</button>
            </div>

        </div>
    )
}
