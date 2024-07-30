import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
  const navigate = useNavigate();

  //Passes the parameter as part of the URL when clicking to go to the details page.
  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskRemove(task.id)}
        >
          <CgClose />
        </button>
        <button className="info-task-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
