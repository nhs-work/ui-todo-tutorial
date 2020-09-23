import { SET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case REMOVE_TODO:
      const newTodo = {
        ...state.todos,
      };
      delete newTodo[data.id];
      return { ...state, todos: newTodo };
    case UPDATE_TODO:
      const newTodo2 = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos: newTodo2 };
    default:
      return state;
  }
};
