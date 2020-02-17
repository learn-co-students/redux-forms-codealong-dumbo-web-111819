// ./src/reducers/manageTodo.js
 
export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
 
      console.log({ todos: state.todos.concat(action.todo) });
 
      return { todos: state.todos.concat(action.todo)};//.payload.text) };
 
    default:
      return state;
  }
}