import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input
            ref={inputRef}
            className="form-control"
            placeholder="Tú Nombre"/>
            <button className="btn btn-outline-primary mt-2"
            onClick={handleFocus}>Selecionado</button>
        </>
    )
}
