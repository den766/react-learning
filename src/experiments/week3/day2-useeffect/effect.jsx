import { useEffect, useState } from "react";



function EffectExp() {

    const [count, setCount] = useState(0);

    console.log("render");

    useEffect(()=> {

         console.log("effect");
    },[])
    
 
      return (

         <>

         <h1>{count}</h1>
         <button onClick={()=> setCount(count + 1)}>Click</button>
         </>
      )
}

export default EffectExp;