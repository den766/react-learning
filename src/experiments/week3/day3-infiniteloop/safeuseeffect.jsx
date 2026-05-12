import { useState, useEffect } from "react";

function SafeUseEffect() {

    const [count, setCount] = useState(0);

    console.log("render Phase");

    useEffect(()=> {

         console.log("count changed");
    }, [count]);

     return(

         <>
         <button onClick={()=> setCount(count + 1)}>{count}</button>
         </>
     )
}

export default SafeUseEffect;