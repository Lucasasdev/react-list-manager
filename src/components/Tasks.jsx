import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskRemove }) => {
  return (
    <>
      {tasks.slice(0, 10).map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskRemove={handleTaskRemove}
        />
      ))}
    </>
  );
};

export default Tasks;
