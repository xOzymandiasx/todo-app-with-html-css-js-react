import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import "../styles/todoForm.css";

const TodoForm = () => {
  const [data, setData] = useState("");

  const { createTodo, darktheme } = useContext(TodoContext);

  const inputStyle = {
    backgroundColor: darktheme ? "rgb(57, 58, 76)" :"white",
    color: darktheme ? "white" : "black",
    border: darktheme ? "rgb(57, 58, 76)" : "white"
}

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.trim().length === 0 ? alert("Write a todo") : createTodo(data);
    setData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          style={inputStyle}
          className={`${darktheme ?"placeholder-white" : "placeholder-black"}`}
          id="todo"
          name="todo"
          placeholder="Create a new todo.."
          value={data}
          onChange={handleChange}
        ></input>
      </label>
    </form>
  );
};

export default TodoForm;
