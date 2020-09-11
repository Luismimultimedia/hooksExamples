import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todoList, handleComplete, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todoList.map((todo, i) =>
                    (
                        <TodoListItem 
                        key={todo.id}
                        todo={todo} 
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                        index={i}
                        />
                    )
                )
            }
        </ul>
    )
}
