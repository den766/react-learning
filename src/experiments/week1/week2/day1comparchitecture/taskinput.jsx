import { useState } from "react";

function TaskInputForm({onAddTask}) {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={() => {
            if (input.trim() === "") return;

            onAddTask(input); // send to parent
            setInput(""); // clear input
          }}    
        >
          Add
        </button>

        <button id="addBtn">Add</button>
      </div>
    </>
  );
}

export default TaskInputForm;
