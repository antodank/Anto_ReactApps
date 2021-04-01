import React,{useState} from 'react';
import TodoList from './TodoList'

export default function TodoApp() {

    const [text, settext] = useState('');
    const [todos, settodos] = useState([{  name : "Todo 1" },
    { name : "Todo 2" }])

    const AddToList = () =>
    {
        if (!text) return;
        let newobj = {name:text };
        addTodo(newobj);
        settext('');
    }
    const addTodo = newobj => {
        const newTodos = [...todos,newobj];
        settodos(newTodos);
      };

    const removeFromList = () =>
    {
        if(todos.length > 0)
        {
            let newobj = todos.slice(1,todos.length);
            settodos(newobj);
        }
        
    }

    const clearList = () =>
    {
        settodos([]);
    }

    return (
        <div>
            <TodoList todosList={todos}>
            </TodoList>
            <div>
            <input type="text" id="txtid" value={text} onChange={ (e) => settext(e.target.value)}></input>
            </div>
            <div>
            <button id="btnAdd" onClick = {AddToList}>Add Todo</button>
            <button id="btnRemove" onClick = {removeFromList}>Add Todo</button>
            <button id="btnClear" onClick={clearList} >Clear</button>
            </div>
        </div>
    )
}
