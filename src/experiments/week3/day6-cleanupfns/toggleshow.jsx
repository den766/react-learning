import { useState } from "react";
import Timer2 from "./timer";
import Timer3 from "./memoryleaks";

function ToggleShow() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>click</button>

      {show && <Timer3 />}
    </div>
  );
}

export default ToggleShow;
