const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_TODO":
    console.log({ todos: state.todos.concat(payload.text) });
 
      return { todos: state.todos.concat(payload.text) };

  default:
    return state
  }
}