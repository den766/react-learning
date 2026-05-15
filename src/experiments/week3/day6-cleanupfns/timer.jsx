import { useEffect } from "react";

function Timer2() {
  console.log("Render Phase");

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Timer is running");
    }, 1000);

    const randomId = Math.random();

    console.log("timer created:", randomId);

    return () => {
      clearInterval(id);
      console.log("cleanup:", randomId);
    };
  }, []);

  return <h1>Timer Component</h1>;
}

export default Timer2;
