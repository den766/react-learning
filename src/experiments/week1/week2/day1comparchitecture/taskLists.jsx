import TaskCard from "./taskcard";

function TaskList({ tasks , onDeleteTask }) {
  return (
    
      <ul>
        {tasks.map((task, index) => {
            
          return <TaskCard 
          key={index}
          task={task}
          index={index}
          onDeleteTask={onDeleteTask}
          />
        })}
      </ul>
    
  );
}

export default TaskList;
