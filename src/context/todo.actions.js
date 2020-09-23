export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const setTodos = (todos) => ({ type: SET_TODOS, data: todos });
export const addTodo = (id, description) => ({
  type: ADD_TODO,
  data: { id, description },
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  data: { id },
});
export const updateTodo = (id, description) => ({
  type: UPDATE_TODO,
  data: { id, description },
});
