// Converting to class-based components

import React from "react";
import ReactDOM from "react-dom";

// #1
function App() {
  return (
    <div>
      <h1>Numero 1</h1>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Numero uno</h1>
      </div>
    );
  }
}

// #2
function Header(props) {
  return (
    <header>
      <p>Welcome, {props.username}!</p>
    </header>
  );
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

// #3
