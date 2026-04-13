import { useState } from "react";
import "./counter.css";

function Counter() {
  console.log("component running");
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function increaseBy5() {
    setCount(count + 5);
  }

  function randomCount() {
    setCount(Math.floor(Math.random() * 10));
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-value">{count}</h1>

      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={increaseBy5}>Increaseby5</button>
      <button onClick={randomCount}>random</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
