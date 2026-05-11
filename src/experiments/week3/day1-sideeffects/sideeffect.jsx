import { useState, useEffect } from "react";

function Effect() {

    const [count, setCount] = useState(0);

    console.log("1. Render phase");
    
    // setCount(count + 1);

    useEffect(()=> {

         console.log("2. Effect Phase");

         return () => {

             console.log("clean uP");
         }
    } , [count]);

     return (
        
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>inc</button>
        </>
     )
}

export default Effect;