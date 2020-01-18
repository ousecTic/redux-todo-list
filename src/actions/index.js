let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  payload: text
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  payload: id
});
