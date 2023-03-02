import React, { createContext, useEffect, useState } from "react";
import { todos as data } from "../tasks/todos.js";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [todosDb, setTodosDb] = useState(data);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darktheme, setDarktheme] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    setTodos(data);
  }, []);

  useEffect(() => {
    setTodos(todosDb);
  }, [todosDb]);

  const deleteTodo = (id) => {
    setTodosDb(todosDb.filter((todo) => todo.id !== id));
  };

  const completeTask = (id) => {
    setTodosDb(
      todosDb.map((todo) => {
        if (todo.id === id) todo.complete = !todo.complete;
        return todo;
      })
    );
  };

  const createTodo = (data) => {
    setTodosDb([
      ...todos,
      {
        data,
        complete: false,
        id: uuidv4(),
      },
    ]);
  };

  const filterCompleteTask = () => {
    setTodos(todosDb.filter((todo) => todo.complete === true));
  };

  const filterActiveTask = () => {
    setTodos(todosDb.filter((todo) => todo.complete === false));
  };

  const allTasks = () => {
    setTodos(todosDb.map((todo) => todo));
  };

  const cleanCompleteTask = () => {
    if (todosDb.length === 0) return;
    todos.forEach(
      (item) =>
        item.complete && 
        setTodosDb(todosDb.filter((todo) => todo.complete === false))
    );
  };

  const handleTheme = () => {
    setDarktheme(!darktheme);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo,
        completeTask,
        createTodo,
        allTasks,
        filterCompleteTask,
        filterActiveTask,
        cleanCompleteTask,
        windowWidth,
        darktheme,
        handleTheme,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
