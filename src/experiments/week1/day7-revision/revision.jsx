import { useState } from "react";

function CounterRevise() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default CounterRevise;
