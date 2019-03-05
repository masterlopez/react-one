import React from "react";
import jokesData from "./jokesData";
import Joke from "./Joke";

function MapEx() {
  /* First example: map function creates a new array with the same index and an applied modification. In this 
    case is the array number times 2. */

  const nums = [1, 2, 3, 4, 5];
  const doubled = nums.map(function(num) {
    return num * 2;
  });
  console.log(doubled);

  /* Second example with arrow function */
  const jokeComponents = jokesData.map(joke => {
    return <Joke question={joke.question} punchline={joke.punchline} />;
  });

  /* Second example with arrow function and reduced format since its returning a single component 
   and is an implicit return */
  const jokeComponentsRedux = jokesData.map(joke => (
    <Joke question={joke.question} punchline={joke.punchline} />
  ));

  return <h3>Hiya</h3>;
}

export default MapEx;
