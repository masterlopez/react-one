// Converting to class-based components

import React from "react";
import ReactDOM from "react-dom";

// #1
function App() {
  return (
    <div>
      <Header username="JL" />
      <Greeting />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="JL" />
        <Greeting />
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
function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  }

  return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
}

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
