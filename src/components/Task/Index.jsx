import React from "react";
import { CgTrash , CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./style.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`${task.title}`);
  };
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "15px solid  #629637", textDecoration: "line-through" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >

          <CgTrash />
          </button>
          <button
            className="see-task-details-button"
            onClick={handleTaskDetailsClick}
          >
            <CgInfo />
          </button>
        
      </div>
    </div>
  );
  // <div className="task-container">
  //   {task.title}
  // </div>
};

export default Task;
