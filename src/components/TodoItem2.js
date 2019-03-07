import React, { Component } from "react";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={props.item.completed} />
        <p>{props.item.text}</p>
      </div>
    );
  }
}
