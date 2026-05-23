import { useState } from "react";

function useToggle() {


    const [isToggle ,setToggle] = useState(false);

    function flipToggle() {

         setToggle(prev => !prev);
    }




    return {

        isToggle,
        flipToggle,
    }
}

export default useToggle;