import React from "react";

import { useCounter } from "../../hooks/useCounter";

import "./Counter.css";

export const CounterWithHooks = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />
      <button className="btn btn-primary mr-2" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary mr-2" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
