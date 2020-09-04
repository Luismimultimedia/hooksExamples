import React, { useState } from "react";

import { useForm } from "../../hooks/useForm";

import "./Effect.css";

export const FormWithHooks = () => {
  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = values;

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log(values);
  } 

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with hooks</h1>
      <hr />

      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

        <button type="submit" className="btn btn-primary">Guardar</button>

    </form>
  );
};