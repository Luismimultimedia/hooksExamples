import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ ...state, loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              data: res,
              loading: false,
              error: null,
            });
          } else {
            console.log('setState desmontado');
          }
        }, 4000);
      });
  }, [url]);

  return state;
};
