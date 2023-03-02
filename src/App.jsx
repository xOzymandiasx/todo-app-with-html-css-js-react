import { useContext } from "react";
import "./App.css";
import CentralControlsQuery from "./components/CentralControlsQuery";
import TitleApp from "./components/TitleApp";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/TodoContextProvider";

function App() {
  const { darktheme } = useContext(TodoContext);

  return (
    <main className= {`App ${darktheme ?"background-dark" :"background-light"}`} >
      <TitleApp />
      <TodoForm />
      <TodoList />
      <CentralControlsQuery />
    </main>
  );
}

export default App;