import { useState, useRef } from "react";

function RenderCounter() {
  const renderCount = useRef(1);
  const [count, setCount] = useState(0);

  function Updateref() {
    renderCount.current++;
    console.log(renderCount.current);
  }

  console.log("comoponent rendered");

  return (
    <div>
      <h2>Count: {count}</h2>

      {/* <h2>Render Count: {renderCount.current}</h2> */}

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default RenderCounter;
