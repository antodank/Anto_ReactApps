import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Bucketlist() {

    const InitialList = [ { 
        "id" : 0,
        "name" : "default"
    }];

    const[ItemName, setItemName] = useState("");

    const [ItemList, setList] = useState(InitialList);

    const handleInput = (event) => {
        //console.log(event.target.value);
        // call on each key pressed in inputbox
        setItemName(event.target.value);
    };

    const handleAdd = () => {
        const newObj = {"name" :ItemName,"id": uuidv4() };
        console.log(newObj.id);
        const newList = [...ItemList,newObj];
        setList(newList);
        setItemName("");
    };

    const handleRemove = () =>{
        ItemList.pop(); // slice(-1,1)
        setList([...ItemList]);
    }


    return (
        <div>
            <div>
                <div>
                    <input type="text" value={ItemName} onChange={handleInput} />
                </div>
                <div><button type="button" onClick={handleAdd}> Push </button></div>
                <div><button type="button" onClick={handleRemove}> Pop </button></div>
            </div>

            <ul>
                {ItemList.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
