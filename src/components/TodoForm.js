import React from 'react'

const TodoForm = (props) => {
	return (
		<form onSubmit={props.addTask}>
		  <input type="text" 
		    value={props.currentTask}
		    onChange={props.updateTask}
		   />
		   <button type="submit">Submit</button>		
		</form>
	)
}

TodoForm.propTypes = {
	currentTask:React.PropTypes.string.isRequired,
	updateTask:React.PropTypes.func.isRequired,
	addTask:React.PropTypes.func.isRequired,
}

export default TodoForm