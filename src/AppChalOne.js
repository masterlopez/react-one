import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };

    this.userLogin = this.userLogin.bind(this);
  }

  userLogin() {
    // Original
    // this.setState({
    //   isLogged: !this.state.isLogged
    // });
    // Optimized
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      };
    });
  }

  render() {
    // Optimized
    let buttonText = this.state.isLogged ? "Log out" : "Log in";
    let labelText = this.state.isLogged ? "Logged in" : "Logged out";

    return (
      <div>
        <h1>{labelText}</h1>
        <button onClick={this.userLogin}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
