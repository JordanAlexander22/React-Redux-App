import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { todosReducer } from "./State/reducers";
import { Provider } from "react-redux";
import Todos from "./Components/Todos";
import "./App.css";
// STEP 1 OF THE GENERAL STEPS
// this app needs a count, a form and a todos (slices of state)
// STEP 4 OF THE GENERAL STEPS
const monsterReducer = combineReducers({
  // what keys? One per slice, choosing pretty names
  todos: todosReducer
});
// STEP 5 OF THE GENERAL STEPS
const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk /* ,etc , other middlewares */),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
    <Todos />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();