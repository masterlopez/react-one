import React from "react";

import "./components/style.css";

// function App2(props) {
//   return (
//     <div>
//       <h1>Hiya! {props.whatever}</h1>
//     </div>
//   );
// }

// Class based component
class App2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Class based components {this.props.whatever}</h1>
      </div>
    );
  }
}

export default App2;
