import { useState } from "react";

function UseRefPractice() {
  const [count, setCount] = useState(0);
  console.log("render Phase");
  console.log(count);
  let value = 0;
  console.log(value);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default UseRefPractice;
