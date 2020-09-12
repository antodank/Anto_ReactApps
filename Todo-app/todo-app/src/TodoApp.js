import React,{useState} from 'react';
import TodoList from './TodoList'

export default function TodoApp() {
    const [todos, setstate] = useState([{ id : "1", name : "Todo 1" },
    { id : "1", name : "Todo 2" }])

    return (
        <div>
            <TodoList todosList={todos}>
            </TodoList>
            <div>
            <input type="text" id="txtid" ></input>
            </div>
            <div>
            <button id="btnAdd">Add</button>
            <button id="btnClear">Clear</button>
            </div>
        </div>
    )
}
