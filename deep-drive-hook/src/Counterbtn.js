import React,{useState,useEffect} from 'react'

export default function Counterbtn() {

    const [countstate, setcountstate] = useState(0);

    const showCount = () =>
    {
        alert(`Counter - ${countstate}`);
    }

    const handleAfterClick = () => {
        setTimeout(() => {
          alert(`After Counter - ${countstate}`);
        }, 5000);
      }

    // useEffect(() => {
    //     showCount();
    // })

    return (
        <div>
            <div><h1>{countstate}</h1></div>
            <button onClick={showCount} >Show me the count</button>
            <button onClick={() => setcountstate(countstate + 1)}>Counter+</button>
            <button onClick={() => setcountstate(countstate - 1)}>Counter-</button>
            <button onClick={handleAfterClick} >Show me the count</button>
        </div>
    )
}
