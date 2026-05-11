import { useState } from "react";
import Timer from "./timer";

function TimerP() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Timer
      </button>

      {show && <Timer />}
    </div>
  );
}

export default TimerP;

