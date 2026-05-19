import { useRef, useState } from "react";

function RefPractice1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log("render phase");

  function updateRef() {
    countRef.current++;
    console.log("RefValue : ", countRef.current);
  }

  function updateState(){
     
    setCount(count+1);
  }


  return (

    <div>
        <h2>state : {count}</h2>
        <h2>Ref: {countRef.current}</h2>
        <button onClick={updateRef}>
        Update Ref
      </button>

      <button onClick={updateState}>
        Update State
      </button>
    </div>

  );
}

export default RefPractice1;
