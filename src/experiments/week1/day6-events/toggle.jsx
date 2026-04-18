import { useState } from "react";


function ToggleMsg() {

    const [show, setShow] = useState(true);

    function toggle(){

         setShow(!show)
    }

     return (

        <>
        <button onClick={toggle}>{show ? "hide Message" : "show message"}</button>
        {show && <p>Hello react</p>}
        </>
     )
}

export default ToggleMsg;