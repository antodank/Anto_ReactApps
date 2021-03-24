import React,{useState,useEffect} from 'react'

export default function UseStatePrac2({ toggle, onToggle }) {
    
    const [random, setRandom] = useState(3);
    const [value, setValue] = useState('')

    useEffect(() => {
        //I run on every render: mount + update.
        console.log('mounting...');

        //I will be called prior to unmounting
        return () => console.log('unmounting...');
    });

    //Only Run Once, on Mount
    useEffect(() => {
        console.log('I run only on the first render: mount.');
      }, []);

    const reRender = () => setRandom((random * 3) /2);



    return (
        <div>
            <div>
            <label for="label1">Hello React</label>
            <input type="checkbox" name="vehicle1" value="Bike" checked={toggle}/>
            <label for="vehicle1"> I am checkbox</label>
            {/* property changed  */}
            <button type="button" onClick={onToggle}>
                Toggle
            </button>
            </div>

            <div>
                <div>{random}</div>
                <button onClick={reRender}>Re-render</button>
            </div>

            <div>
            {/* state changed  */}
            <input type="text" value={value}
                onChange={e => setValue(e.target.value)} ></input>
            <button>Click Me</button>
            </div>
        </div>
    )
}
