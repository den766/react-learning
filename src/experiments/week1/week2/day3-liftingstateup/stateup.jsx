import { useState } from "react";
import CounterControls from "./counterControls";
import CounterDisplay from "./counterDisplay";

function SubApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterControls setCount={setCount} />
      <CounterDisplay count={count} />
    </>
  );
}
export default SubApp;
