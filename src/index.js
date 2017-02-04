import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

class TodoList extends React.Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
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
      }] 
    }
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
      <ul>
      {
        this.state.tasks.map((task, index) => {
          return <TodoItem key={task.name} clickHandler={this.changeStatus} index={index} details={task} />
        })
      }
        
      </ul>
    )
  }
}

class TodoItem extends React.Component {
  render(){
    return (
      <li onClick={ () => {
        this.props.clickHandler(this.props.index);
      }} className={this.props.details.completed ? 'completed' : 
    ''}>
        {this.props.details.name}
      </li>
    )
  }
}

ReactDOM.render(<TodoList />,document.getElementById('root'))

