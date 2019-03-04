import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import "./components/style.css";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
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
