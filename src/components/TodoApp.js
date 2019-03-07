import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todoData";
import "./style.css";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  render() {
    const todoComponents = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default TodoApp;
