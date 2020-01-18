const todos = (state = [], action) => {
  let { type, id, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, { id: id, text: payload }];

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== payload);

    default:
      return state;
  }
};

export default todos;
