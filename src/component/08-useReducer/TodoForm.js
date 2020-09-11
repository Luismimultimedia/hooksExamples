import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, resetForm] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo({
            type: 'add',
            payload: newTodo
        });
        resetForm();
    }

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Agregar..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-outline-primary mt-1 btn-block">Agregar</button>
            </form>
        </>
    )
}
