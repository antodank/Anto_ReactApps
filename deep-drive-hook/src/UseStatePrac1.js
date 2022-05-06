import React,{useState,useEffect} from 'react'

export default function UseStatePrac1() {

    const [value, setValue] = useState('initial');
    const [inputval, setinputval] = useState('');

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    //This effect uses the `value` variable,so it "depends on" `value`.
    useEffect(() => {
        console.log(value);
      }, [value]);

      //depends on" `count2`
    useEffect(() => {
        console.log("count2 changed!");
      }, [count2]);


    return (
        <div>
        <h3>hooks </h3>
        <input type="text" onChange={(event) => setinputval(event.target.value)}></input>
        <button onClick={() => setValue(inputval)} >Click Me</button>
        <div>
        <div> {count1} {count2} {count3}</div>
            <div>
                <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
                <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
                <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
            </div>
        </div>

        </div>
    )
}
