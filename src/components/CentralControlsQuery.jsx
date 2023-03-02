import React, { useContext } from 'react';
import { TodoContext } from "../context/TodoContextProvider";
import "../styles/todoControl.css"
import "../styles/centralControlsQuery.css"

const CentralControlsQuery = () => {

	const {darktheme, allTasks, filterActiveTask, filterCompleteTask, windowWidth} = useContext(TodoContext);

  return (
		<>
			{windowWidth <= 550 &&				 
				<div style={{backgroundColor: `${darktheme ?"hsl(237, 14%, 26%)" : "white"}`}} className="central-controls control-container-query">
					<div className={`controls ${darktheme ?"hover-dark" :"hover-light"}`} style={{color:"hsl(220, 98%, 61%)"}} onClick={allTasks}>All</div>
					<div className={`controls ${darktheme ?"hover-dark" :"hover-light"}`} onClick={filterActiveTask}>Active</div>
					<div className={`controls ${darktheme ?"hover-dark" :"hover-light"}`} onClick={filterCompleteTask}>Completed</div>
				</div>}
		</>
  )
}

export default CentralControlsQuery;