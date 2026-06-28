import { useState } from "react";

function CounterNew() {

    const [count, setCount] = useState(0);

    console.log("counter rendered");
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </>
  );
}

export default CounterNew;
