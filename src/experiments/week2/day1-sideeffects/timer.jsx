import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("timer running");
    }, 1000);

    console.log("effect started");

    return () => {
      console.log("cleanup running");
      clearInterval(id);
    };
  }, []);

  return <h1>Timer Component</h1>;
}

export default Timer;