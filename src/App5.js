import React, { Component } from "react";
import Conditional from "./components/Conditional";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
        <Footer />
      </div>
    );
  }
}

export default App;
