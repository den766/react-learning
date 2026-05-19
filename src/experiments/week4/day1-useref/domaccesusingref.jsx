import { useRef } from "react";

function DomAcessusingRef() {

    const inputRef = useRef();

    function UpdateInputRef(){

         inputRef.current.focus();
         console.log(inputRef)
         console.log(inputRef.current.value="AShu")
    }

    
   return (
     <div>
     <input type="text"  ref={inputRef} placeholder="typehere"/>
     <button onClick={UpdateInputRef}>Click</button>
     </div>

   )
}
export default DomAcessusingRef;
