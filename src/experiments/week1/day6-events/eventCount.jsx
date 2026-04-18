import { useState } from "react";

function CountEvent() {
  const [count, setCount] = useState(0);

  function increaseCount(){
     
     setCount(count + 1);
  }

 function decreaseCount() {

     if(count > 0){
   
        setCount(count - 1);
     }
 }

 function resetCount(){
     setCount(0);
 }
  return (
    <>
    <h1>{count}</h1>
      <div>
        <button onClick={increaseCount}>increase</button>
      </div>
      <div>
        <button onClick={decreaseCount}>decrease</button>
      </div>
      <div>
        <button onClick={resetCount}>reset</button>
      </div>
    </>
  );
}


export default CountEvent;