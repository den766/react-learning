import { useRef, useState } from "react";

function RefVsVariable(){
     
    let normalValue = 0;
    const refValue = useRef(0);
     const [count, setCount] = useState(0);
  
    function increaseNormal() {

       normalValue++;
       console.log("normal updated Value:" , normalValue);
    }

    function increaseRef(){

         refValue.current++;
         console.log(refValue.current);
    }

     function increaseState() {

         setCount(count+1);
     }

     console.log("component Rendered");

      return (
    <div>
      <h2>Normal Value: {normalValue}</h2>
      <h2>State: {count}</h2>
      <h2>ref : {refValue.current}</h2>

      <button onClick={increaseNormal}>
        Increase Normal
      </button>

      <button onClick={increaseRef}>Increase Ref</button>

      <button onClick={increaseState}>
        Increase State
      </button>
    </div>
  );
    
}

export default RefVsVariable;