import * as types from "./actionTypes";
const initialTodos = [];
export function todosReducer(todos = initialTodos, action) {
  switch (action.type) {
    case types.SET_TODOS:
      return action.payload;
    default:
      return todos;
  }
}