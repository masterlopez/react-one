import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadmessages: ["Hi", "Call me"]
    };
  }

  render() {
    return (
      <div>
        {/* Conditional Rendering using && and ternary expresion */}
        {this.state.unreadmessages.length > 0 && (
          <h2>You have {this.state.unreadmessages.length} unread messages!</h2>
        )}
      </div>
    );
  }
}

export default App;
