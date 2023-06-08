import React from "react";
import Todo from "./components/todo/Todo.js";
import Header from "./components/header/header.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main-container">
        <Todo />
      </main>
    </>
  );
}

export default App;
