import { useState } from "react";

function ToggleNew3() {
  const [isToggle, setToggle] = useState(false);

  function ChangeToggle() {
    setToggle((prev) => !prev);
  }

  return (


    <>{isToggle && <h1>Hey welcome Again</h1>}
    <button onClick={ChangeToggle}>click</button>
    
    </>
  )
  
}

export default ToggleNew3;
