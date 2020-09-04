import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];

    const [ todos ] = useReducer(todoReducer, initialState);
    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Lunes</li>
                <li>Martes</li>
                <li>Miercoles</li>
            </ul>
        </div>
    )
}
