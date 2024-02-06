import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      {/* {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))} */}
    </div>
  );
}
