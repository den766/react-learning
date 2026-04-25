function TaskCard({ task, index, onDeleteTask }) {
  return (
    <li>
      {task}
      <button onClick={() => onDeleteTask(index)}>Delete</button>
    </li>
  );
}


export default TaskCard;