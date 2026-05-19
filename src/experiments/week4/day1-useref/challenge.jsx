// Challenge 1 Focus Input ;

// import { useRef } from "react";

// function FocusInput() {

//     console.log("componenet rendered");

//     const inputRef = useRef();

//     function focusInputref() {

//          inputRef.current.focus();
//          console.log(inputRef.current);
//     }

//     function clearInput(){

//         inputRef.current.value = "";
//     }

//     function ColorChange() {

//         inputRef.current.style.border  = "2px solid red";
//     }

//     return (

//          <div>
//             <input type="text" ref={inputRef} placeholder="typehere" />

//             <button onClick={focusInputref}>focusInput</button>
//             <button onClick={clearInput}>clearInput</button>
//             <button onClick={ColorChange}>Change color</button>
//          </div>
//     )
// }

// export default FocusInput;

// Challenge 2 Previous count tracker

import { useState, useRef } from "react";

function PreviousCountTracker() {
  console.log("component rendered");

  const [count, setCount] = useState(0);
  const previousCount = useRef();

  function UpdateCount() {

    previousCount.current =count;
    setCount(count + 1);
  }



  return (
    <div>
      <h1>current:{count}</h1>
      <h1>previous:{previousCount.current}</h1>
      <button onClick={UpdateCount}>Inc Count</button>
      {/* <button onClick={updateRef}>previous count</button> */}
    </div>
  );
}

export default PreviousCountTracker;
