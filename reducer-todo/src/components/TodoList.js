import React, { useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <div>
            <h1>List of Todos:</h1>
        </div>
    )
}

export default TodoList;