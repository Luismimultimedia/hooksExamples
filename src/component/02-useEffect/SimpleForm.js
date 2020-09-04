import React, { useState, useEffect } from "react";

import { Message } from "./Message";

import "./Effect.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const {name, email} = formState;

  useEffect(() => {
    console.log("!Hey");
  }, []);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
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

    {(name === 'Luis' || name === 'Deiby') && <Message/>}

    </>
  );
};
