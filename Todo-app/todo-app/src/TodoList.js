import React from 'react'
import Todo from './Todo';

 function TodoList({todosList}) {
    return (
        todosList.map(todo =>{
           return <Todo key={todo.key} todo ={todo} ></Todo>
        })
    )
}

export default TodoList;
