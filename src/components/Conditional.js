import React from "react";

function Conditional(props) {
  //     // Regular expresion
  //   if (props.isLoading) {
  //     return <h1>Loading...</h1>;
  //   } else {
  //     return <h1>Some cool stuff about conditional rendering</h1>;
  //   }

  // Using ternary expression
  // condition ? statement if true : statement if false
  //   return (
  //     <div>
  //       <h1>Navbar</h1>
  //       {props.isLoading ? (
  //         <h1>Loading...</h1>
  //       ) : (
  //         <h1>Some cool stuff about conditional rendering</h1>
  //       )}
  //       <h2>Footer</h2>
  //     </div>
  //   );

  // The proper way to do this is to control the rendering conditional statements in the App.js
  // instead of here.
  return (
    <div>
      <h1>Some cool stuff about conditional rendering.</h1>
    </div>
  );
}
export default Conditional;
