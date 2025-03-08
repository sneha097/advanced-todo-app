import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, completed }) => {
  return (
    <div className="task-item d-flex justify-content-between align-items-center">
      <div>
        <input type="checkbox" checked={completed} readOnly className="me-2" />
        <span className={completed ? "text-decoration-line-through text-success" : ""}>
          {task.text}
        </span>
      </div>
      <span className={task.important ? "text-warning" : "text-muted"}>⭐</span>
    </div>
  );
};

export default TaskItem;