import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import "../styles/todoControl.css";

const TodoControl = () => {
  const {
    todos,
    filterCompleteTask,
    allTasks,
    filterActiveTask,
    cleanCompleteTask,
    windowWidth,
    darktheme,
  } = useContext(TodoContext);
  return (
    <>
      <div className="control-container">
        {`${todos.length} items left`}
        {windowWidth > 550 && 
        <div className="central-controls">
          <div className={`controls ${darktheme ?"hover-dark" :"hover-light"}`} style={{color:"hsl(220, 98%, 61%)"}} onClick={allTasks}>All</div>
          <div className={`controls ${darktheme ?"hover-dark" :"hover-light"}`} onClick={filterActiveTask}>Active</div>
          <div className={`controls ${darktheme ?"hover-dark" :"hover-light"}`} onClick={filterCompleteTask}>Completed</div>
        </div>}
        <div className={`controls ${darktheme ?"hover-dark" :"hover-light"}`} onClick={cleanCompleteTask}>Clear completed</div>
      </div>
    </>
  );
};

export default TodoControl;
