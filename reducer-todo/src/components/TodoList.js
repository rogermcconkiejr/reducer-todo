import React, { useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state);


    return (
        <div>
            <h1>List of Todos:</h1>
            {state.map(state =>{
                return (
                <div>
                 <li className = {`todo${state.completed ? ' completed' : ''}`} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: state.id})}>Todo: {state.item}</li>
                </div>
                )
                
            })}
        <div className = "formContainer">
            <input className = "itemField"/>
            <button onClick ={() => dispatch({ type: 'ADD_TODO', payload: `${document.querySelector('input').value}`})}>Add Item to List</button>
        </div>

        </div>
    )
}

export default TodoList;