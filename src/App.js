import React from "react";

import "./App.css";

//import the components

import InputTodo from "./component/InputTodo";
import ListTodos from "./component/ListTodos";

function App() {
  return (
    <div className="App">
      <h1>Redux Todo List</h1>
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
