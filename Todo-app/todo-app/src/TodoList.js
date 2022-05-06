import React from 'react'
import Todo from './Todo';

 function TodoList({todosList}) {
    return (
        todosList.map((todo,index) =>{
           return <Todo key={index} todo ={todo} ></Todo>
        })
    )
}

export default TodoList;
