import { useState } from "react";

function useToggle(initialValue = false) {


    const [isToggle ,setToggle] = useState(initialValue);

    function flipToggle() {

         setToggle(prev => !prev);
    }




    return {

        isToggle,
        flipToggle,
    }
}

export default useToggle;