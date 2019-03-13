import React from "react";
import "./style.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        // anonimous function
        onChange={() => props.handleChange(props.item.id)}
        checked={props.item.completed}
      />
      <p>{props.item.text}</p>
    </div>
  );
}
export default TodoItem;
