import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todoData";

import "./components/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todo: updatedTodos
      };
    });
  }

  render() {
    const todoComponents = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;

// class App2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Jason Borne",
//       position: "Black Op Agent",
//       isLoggedIn: false
//     };
//   }

//   render() {
//     let statusDisplay;
//     if (this.state.isLoggedIn) {
//       statusDisplay = "in";
//     } else {
//       statusDisplay = "off";
//     }
//     return (
//       <div>
//         <h2>User Info</h2>
//         <h3>Name: {this.state.name}</h3>
//         <h3>Position: {this.state.position}</h3>
//         <p>User currently logged {statusDisplay}</p>
//         <TodoApp />
//       </div>
//     );
//   }
// }
