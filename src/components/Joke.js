import React from "react";

function Joke(props) {
  return (
    <div>
      <p style={{ display: !props.haha.question && "none" }}>
        Question: {props.haha.question}
      </p>
      <p style={{ color: !props.haha.question && "#888888" }}>
        Punchline: {props.haha.punchline}
      </p>
    </div>
  );
}

export default Joke;
