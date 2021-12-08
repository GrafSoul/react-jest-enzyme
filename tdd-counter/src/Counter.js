import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState("0");

  return (
    <div>
      <h1>This is counter app</h1>
      <div className="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(+counter + 1)}>
        Increment
      </button>
      <button
        id="decrement-btn"
        onClick={() => (+counter > 0 ? setCounter(+counter - 1) : null)}
        disabled={counter <= 0}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
