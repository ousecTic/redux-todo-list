import React from "react";
import { deleteTodo } from "../actions";
import { connect } from "react-redux";

const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <table border="1">
      <tr>
        <th>Todo</th>

        <th>Delete</th>
      </tr>
      {/*<tr>
        <td>January</td>
        <td>$100</td>
      </tr> */}
      {todos.map(todo => (
        <tr>
          <td>{todo.text}</td>
          <td>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { deleteTodo })(ListTodo);
