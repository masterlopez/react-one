import React from "react";
import Header from "./components/Header";

import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todoData";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";
import Product from "./components/Product";
import productsData from "./components/productsData";

import "./components/style.css";

function App() {
  const todoComponents = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));

  const productComponents = productsData.map(product => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));

  const jokeComponents = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));

  return (
    <div>
      <Header />
      <h2>Products</h2>
      {productComponents}

      {/* <ContactCard
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
      /> */}

      <hr />
      <h2>LOL'd</h2>
      {jokeComponents}
      <hr />
      <h2>Todo List</h2>
      <div className="todo-list">{todoComponents}</div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
