import React from "react";

function Joke(props) {
  return (
    <div>
      <p>Question: {props.haha.question}</p>
      <p>Punchline: {props.haha.punchline}</p>
    </div>
  );
}

export default Joke;
