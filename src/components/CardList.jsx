import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { TodoContext } from "../context/TodoContextProvider";
import "../styles/cardList.css";

const CardList = ({ todo }) => {
  const [display, setDisplay] = useState(false);

  const { completeTask, deleteTodo, windowWidth, darktheme } =
    useContext(TodoContext);

  const mountedStyle = { animation: "inAnimation 250ms ease-in", cursor: "pointer" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };

  const handleDisplay = (value) => {
    setDisplay(value);
  };

  return (
    <div
      className="card"
      onMouseEnter={() => handleDisplay(true)}
      onMouseLeave={() => handleDisplay(false)}
    >
      <div className="check-data-container">
        {todo.complete ? (
          <BsCheckCircle
            className="check-icon"
            onClick={() => completeTask(todo.id)}
          />
        ) : (
          <BsCircle
            className="uncheck-icon"
            onClick={() => completeTask(todo.id)}
          />
        )}
        <div
          className={`text-container ${
            todo.complete
              ? "complete-task"
              : darktheme
              ? "white-text"
              : "black-text"
          }`}
        >
          {todo.data}
        </div>
      </div>
      <div className="delete-button-container">
        {display && windowWidth > 550 && (
          <AiOutlineClose
          className="close-button"
            style={display ? mountedStyle  :unmountedStyle}
            onClick={() => deleteTodo(todo.id)}
          />
        )}
        {windowWidth < 550 && (
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodo(todo.id)}
          />
        )}
      </div>
    </div>
  );
};

export default CardList;
