import { useState, useEffect } from "react";


function DepArrExperiment(){

    const [count, setCount] = useState(0);

    const [name , setName ] = useState("");
    
    console.log("render Phase");

    useEffect(()=> {

        console.log("countEffect");
    },[count , name]);



      
    return (

         <>
         <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
         <button onClick={()=> setCount(count +1)}>click</button>
         </>
    )
} 

export default DepArrExperiment;