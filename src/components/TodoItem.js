import React,{ Component as c, PropTypes as t } from 'react';
import bindfunc from '../util.js'

class TodoItem extends c {
  constructor(props){
    super(props);

    this.state = {
      isEditing:false
    }

    // this.renderForm = this.renderForm.bind(this);
    // this.renderItem = this.renderItem.bind(this);
    // this.toggleState = this.toggleState.bind(this);
    // this.updateItem = this.updateItem.bind(this);

    bindfunc.call(this,['renderForm','renderItem','toggleState','updateItem','newfunc'])
  }
  
  toggleState(){
    const { isEditing } = this.state;
    this.setState({
      isEditing:!isEditing
    })
  }

  newfunc(){

  }

  updateItem(evt){
    evt.preventDefault();
    this.props.editTask(this.props.index, this.input.value);
    this.toggleState();
  }


  renderItem(){
    return (
      <li onClick={ () => {
        this.props.clickHandler(this.props.index);
      }} className={this.props.details.completed ? 'completed' : 
    ''}>
        {this.props.details.name}
        <button onClick={(evt) => {
          evt.stopPropagation();
          this.props.deleteTask(this.props.index)
        }}>Delete</button>
          <button onClick={(evt) => {
          evt.stopPropagation();
          this.toggleState()
        }}>Edit Item</button>

      </li>    
    )
  }
  renderForm(){
    return (
     <form onSubmit={this.updateItem}>
      <input type="text" ref={(value) => {
        this.input = value
      }}  defaultValue={this.props.details.name} />
      <button type="submit">Update Item</button>  
    </form>
    )
  }
  render(){
    const { isEditing } = this.state;
  return (
    <section>
    {
      isEditing ? this.renderForm() :  this.renderItem()
    }
     
    </section> 
       )
    }
}

TodoItem.propTypes = {
  clickHandler: t.func.isRequired,
  index:t.number.isRequired,
  deleteTask:t.func.isRequired,
  editTask:t.func.isRequired,
  details:t.object.isRequired
}


export default TodoItem;