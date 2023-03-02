import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import CardList from "./CardList";
import "../styles/todoList.css"
import TodoControl from "./TodoControl";

const TodoList = () => {
  const { todos, darktheme } = useContext(TodoContext);

  return (
    <div style={{backgroundColor: `${darktheme ?"hsl(237, 14%, 26%)" : "white"}`}} className="card-container">
		{todos.length === 0 && <p className="complete-todos">No todos here</p>}
      {todos.map((todo, index) => (
        <CardList todo={todo} key={index} />
      ))}
      <TodoControl />
    </div>
  );
};

export default TodoList;
