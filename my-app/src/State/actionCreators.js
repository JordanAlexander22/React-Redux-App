import axios from "axios";
import * as types from "./actionTypes";
export const getTodos = () => dispatch => {
  dispatch({ type: "ABOUT TO FETCH TODOS" });
  dispatch({ type: "TURN ON THE SPINNER!!" });
  axios
    .get("http://localhost:4000/todos")
    .then(res => {
      const todos = res.data;
      dispatch({
        type: types.SET_TODOS,
        payload: todos
      });
      dispatch({ type: "TURN OFF THE SPINNER!!" });
    })
    .catch(err => {
      debugger;
    });
};
export const markTodo = (id, completed) => dispatch => {
  dispatch({ type: "ABOUT TO MARK A TODO!!" });
  axios
    .patch(`http://localhost:4000/todos/${id}`, { completed })
    .then(response => {
      dispatch({
        type: types.SET_TODOS,
        payload: response.data
      });
    })
    .catch(error => {
      debugger;
    });
};