import { useState } from "react";

function TogglemsgRevise() {
  const [show, setShow] = useState(true);
  function hidemessage() {
    setShow(!show);
  }
  return (
    <>
      <button onClick={hidemessage}>{show ? "Hide message" : "show message"}</button>
      {show && <p>hello react</p>}
    </>
  );
}

export default TogglemsgRevise;
