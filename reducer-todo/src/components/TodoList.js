import React, { useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state);


    return (
        <div>
            <h1>List of Todos:</h1>
            {state.map(item =>(
                <ol> 
                <li>Todo: {item.item} </li>
                <li className="idList">ID: {item.id}</li>
                <li className="completedList">Completed: {item.completed}</li>
                </ol>
            ))}
        <div className = "formContainer">
            <input className = "itemField"/>
            <button onClick ={() => dispatch({ type: 'ADD_TODO' })}>Add Item to List</button>
        </div>

        </div>
    )
}

export default TodoList;