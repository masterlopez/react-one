import React from "react";

function MapEx() {
  /* First example: map function creates a new array with the same index and an applied modification. In this 
    case is the array number times 2. */

  const nums = [1, 2, 3, 4, 5];
  const doubled = nums.map(function(num) {
    return num * 2;
  });
  console.log(doubled);
}
