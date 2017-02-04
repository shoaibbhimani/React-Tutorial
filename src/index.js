import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import TodoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';

class TodoList extends React.Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      tasks:[{
        name:"Buy Milk",
        completed:false
      },
      {
        name:"Buy Cheese",
        completed:false
      },
      {
        name:"Buy Bread",
        completed:false
      }],
      currentTask:'' 
    }
 }
deleteTask(index){
  console.log(index)

  let tasks = this.state.tasks;
  tasks.splice(index,1);

  this.setState({
    tasks
  })
  
}
addTask(evt){
  evt.preventDefault();
  let tasks = this.state.tasks;
  let currentTask = this.state.currentTask;
  tasks.push({
    name:currentTask,
    completed:false
  })

  this.setState({
    tasks,
    currentTask:'' 
  })


}
updateTask(newValue){
  this.setState({
    currentTask:newValue.target.value
  })
}


changeStatus(index){
 var tasks = this.state.tasks;
 var task = tasks[index];
 task.completed = !task.completed;
 this.setState({
   tasks:tasks
 })
}
 render() {
    return (
      <section>
       <TodoForm 
            currentTask={this.state.currentTask}
            updateTask={this.updateTask}
            addTask={this.addTask}
        />
        <ul>
        {
          this.state.tasks.map((task, index) => {
            return <TodoItem 
                    key={task.name} 
                    clickHandler={this.changeStatus} 
                    index={index} 
                    deleteTask={this.deleteTask}
                    details={task} />
          })
        }
          
        </ul>
      </section>
    )
  }
}



ReactDOM.render(<TodoList />,document.getElementById('root'))

