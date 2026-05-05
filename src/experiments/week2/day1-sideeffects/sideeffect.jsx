import { useState, useEffect } from "react";

function Effect() {

    const [count, setCount] = useState(0);

    console.log("1. Render phase");

    useEffect(()=> {

         console.log("2. Effect Phase");

         return () => {

             console.log("clean uP");
         }
    })

     return (
        
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>inc</button>
        </>
     )
}

export default Effect;