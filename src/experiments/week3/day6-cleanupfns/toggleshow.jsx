import { useState } from "react";
import Timer2 from "./timer";

function ToggleShow() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>click</button>

      {show && <Timer2 />}
    </div>
  );
}

export default ToggleShow;
