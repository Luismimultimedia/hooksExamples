import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';

import './styles.css';
import { TodoForm } from './TodoForm';


export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch(action);
    }

    const handleComplete = (todoId) => {
        const action = {
            type: 'complete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleAddTodo = (action) => {
        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todoList={todos}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <TodoForm handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
