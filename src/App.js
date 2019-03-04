import React from "react";
import Header from "./components/Header";

import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";

import "./components/style.css";

function App() {
  return (
    <div>
      <Header />
      <ContactCard
        contact={{
          name: "Mr. Catus",
          imgURL: "http://placekitten.com/300/200",
          phone: "555-123-1456",
          email: "catus@cat.com"
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Bruh",
          imgURL: "http://placekitten.com/300/200",
          phone: "7894561230",
          email: "gh@ch.com"
        }}
      />
      {/* <ContactCard
        name="Mrs. Achoo"
        imgURL="http://placekitten.com/300/200"
        phone="7894512014"
        email="wer@ij.com"
      />
      <ContactCard
        name="Twinkie"
        imgURL="http://placekitten.com/300/200"
        phone="1234567894"
        email="rew@ty.com"
      /> */}
      <hr />
      <Joke haha={{ question: "Why?", punchline: "Because!" }} />
      <Joke haha={{ question: "Knock knock", punchline: "On Wood!" }} />
      <Joke
        haha={{
          question: "Chicken or Lasagna?",
          punchline: "None are available!"
        }}
      />
      <Joke haha={{ punchline: "Because!" }} />

      <hr />
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
