import { useState } from "react";

function CoutWeek6(){


  const [count , setCount ] = useState(0);
       
     return (
        <>
         <h1>{count}</h1>
         <button onClick={()=> setCount(count+1)}>INC</button>
        </>
        
     )
}

export default CoutWeek6;