import { useState } from "react";

function RandomNumber() {
  
  const [number, setNumber] = useState(0);

  function randomgen() {
    const random = Math.floor(Math.random() * 10);
     setNumber(random);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={randomgen}>generate</button>
    </div>
  );
}

export default RandomNumber;
