import React, { useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state);

    return (
        <div>
            <h1>List of Todos:</h1>
            {state.map(item =>(
                <ul> 
                <li>Todo: {item.item} </li>
                <li>Completed: {item.completed}</li>
                </ul>
            ))}
        <div className = "formContainer">
            
        </div>

        </div>
    )
}

export default TodoList;