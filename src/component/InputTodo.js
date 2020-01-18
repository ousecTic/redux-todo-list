import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const InputTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("");
      }}
    >
      <input
        type="text"
        placeholder="addTodo ..."
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect()(InputTodo);
