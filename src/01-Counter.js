import React, { useState, useEffect } from "react";

import "./styles.css";

const useCounter = ({ initialState, step }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count => count + step);

  return { count, increment };
};

const Counter = () => {
  // classic hooks
  // const [count, setCount] = useState(0);
  // const increment = () => setCount(count => count + 1);

  const initalCount = Number(window.localStorage.getItem("count") || 0);
  // customHook
  const { count, increment } = useCounter({
    initialState: initalCount,
    step: 1
  });

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return (
    <button className="Counter" onClick={increment}>
      {count}
    </button>
  );
};

export default Counter;
