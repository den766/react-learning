import { useEffect, useState } from "react";

function CleanUp(){

    const [count , setCount] = useState(0);

    useEffect(()=>{

         setInterval(() => {
            
            
            console.log("Timmer running");
            
         }, 1000);

         setInterval(() => {

            console.log("Timer 2 running");  
            
         }, 2000);
    },[]);

     return (
             
        <button onClick={()=> setCount(count + 1)}>{count}</button>
     )
}

export default CleanUp;