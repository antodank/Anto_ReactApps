import React,{useState,useEffect} from 'react';

export default function Position() {
    return (
        <div>
            <Top></Top>
        </div>
    )
}

export function Top() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Top rendered");
        return () => console.log('Top unmounting...');
      });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Top Level {count}</button>
            <Middle></Middle>
        </div>
    )
}

export function Middle() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Middle rendered");
        return () => console.log('Middle unmounting...');
      });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Middle Level {count}</button>
            <Bottom></Bottom>
        </div>
    )
}

export function Bottom() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Bottom rendered");
        return () => console.log('Bottom unmounting...');
      });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Bottom Level {count}</button>
        </div>
    )
}
