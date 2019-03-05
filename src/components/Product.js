import React from "react";

function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>
        {props.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
        - {props.description}
      </p>

      <br />
    </div>
  );
}

export default Product;
