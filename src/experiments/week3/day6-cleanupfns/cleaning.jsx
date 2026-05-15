import { useState, useEffect } from "react";

function CleaningFn() {
  const [count, setCount] = useState(0);

  console.log("render phase");

  useEffect(() => {

    console.log("effect running");
    const id = setInterval(() => {
      console.log("Timer is running");
    }, 1000);

    

    return () => {

      console.log("cleanup running")
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
}

export default CleaningFn;
