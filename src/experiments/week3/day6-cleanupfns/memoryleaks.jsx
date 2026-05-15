import { useEffect } from "react";

let timerCount = 0;

function Timer3() {
  useEffect(() => {
    const id = setInterval(() => {
        console.log(id);
      console.log("running...");
    }, 1000);

    timerCount++;
    console.log("active timers:", timerCount);

    return () => {
      console.log("cleanup running");
    };
  }, []);

  return <h1>Timer Component</h1>;
}

export default Timer3;
