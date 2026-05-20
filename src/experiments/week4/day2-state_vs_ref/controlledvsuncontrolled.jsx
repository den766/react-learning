import { useState , useRef } from "react";

// controlled input

// function ControlledInput1() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <h2>{text}</h2>
//     </div>
//   );
// }

// export default ControlledInput1;


// uncontrolled input



function UnControlledInput() {
  const inputRef = useRef();
  console.log(useState);
  console.log("Rendered");

  function showValue() {
    console.log(inputRef.current.value);
  }

  function inputFocus(){

     inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={showValue}>
        Show Input Value
      </button>

      <button onClick={inputFocus}>Focus</button>
    </div>
  );
}

export default UnControlledInput;


