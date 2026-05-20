import { useState, useRef } from "react";


function RefVsState(){


     let normalValue = 0;

     const refValue = useRef(0);

     const [stateValue, setStateValue] = useState(0);

     console.log("component rendered");


     function UpdateValues(){

         normalValue++;
         refValue.current++;
         setStateValue((prev)=> prev + 1);

         console.log("normal:" , normalValue);
         console.log("refValue:" , refValue.current)
     }


     return (

         <div>

            <h1>normal:{normalValue}</h1>
            <h1>refValue:{refValue.current}</h1>
            <h1>statevalue:{stateValue}</h1>
            <button onClick={UpdateValues}>updateAll</button>
         </div>
     )
}

export default RefVsState;