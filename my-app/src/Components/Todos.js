import React, { useEffect } from "react";
import { connect } from "react-redux";
import { markTodo, getTodos } from "../State/actionCreators";
export function Todos({ todos, markTodo, getTodos }) {
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="component">
      {todos.map(todo => (
        <div
          className="key"
          key={todo.id}
          style={{ color: !todo.completed ? "red" : "green" }}
        >
          {todo.name}
          <button className="btn1" onClick={() => markTodo(todo.id, true)}>
            Mark complete
          </button>
          <button className="btn2" onClick={() => markTodo(todo.id, false)}>
            Mark incomplete
          </button>
        </div>
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps, { markTodo, getTodos })(Todos);