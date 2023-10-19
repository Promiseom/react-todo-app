import React, {useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import {nanoid} from "nanoid";

function App(props) {
	const [tasks, setTasks] = useState(props.tasks);

	let addTask = (name)=>{
		let newTask = {id: `todo-${nanoid()}`, name: name, completed: false};
		setTasks([...tasks, newTask]);
	};

	let toggleTaskCompleted = (id)=>{
		let updatedTasks = tasks?.map((task)=>{
			if(task.id == id){
				return {...task, completed: !task.completed};
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	let deleteTask = (id)=>{
		let remainingTasks = tasks.filter((task)=>task.id !== id);
		setTasks(remainingTasks);
	};

	const taskList = tasks?.map((task) => (
		<Todo 
			id={task.id}
			name={task.name} 
			completed={task.completed} 
			key={task.id}
			toggleTaskCompleted = {toggleTaskCompleted}
			deleteTask = {deleteTask}
		/>
	));	

	const taskNoun = (taskList.length > 1 || taskList.length == 0)? 'tasks' : 'task';
	const tasksHeading = `${taskList.length} ${taskNoun} remaining`;

	return (
		<div className="todoapp stack-large">
			<h1>TodoMatic</h1>
			<Form addTask={addTask}/>

			<div className="filters btn-group stack-exception">
				<FilterButton />
				<FilterButton />
				<FilterButton />
			</div>
			<h2 id="list-heading">{tasksHeading}</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading">
				
				{taskList}

			</ul>
		</div>
	);
}

export default App;