import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // Lifecycle analogy: You were just borned. Component did just mount to the screen. Runs just once while the component is shown on the screen.
  componentDidMount() {}

  // Lifecycle analogy: When someone gives you a gift. Runs when the component is first mounted and everytime the component receives props from a parent component.
  // Is deprecated.
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something important
    }
  }

  // Lifecicle analogy: Making a decision as to whether you should change clothes or not.
  shouldComponentUpdate(nextProps, nextState) {
    // return true if want to update.
    // return false if not.
  }

  componentWillUnmount() {}

  //   Lifecycle analogy: Getting dressed for the day. Determine what gets rendered to the screen. Can be called many times.
  render() {
    return <div>Code goes here</div>;
  }
}

export default App;
