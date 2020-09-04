import React, { useLayoutEffect, useState, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";

import "./Effect.css";
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [box, setBox] = useState({})

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
        setBox(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p ref={ pTag } className="mb-0">{quote}</p>
            </blockquote>
            {!loading && (
                <button className="btn btn-primary float-right" onClick={increment}>
                    Siguiente Quote
                </button>
            )}
            <pre> { JSON.stringify(box, null, 3) } </pre>
        </div>
    );
};
