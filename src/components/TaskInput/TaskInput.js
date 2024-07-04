import React, { Component } from 'react';
import './TaskInput.css'; //Importing the respective css properties

class TaskInput extends Component {
  state = {
    input: ''  //Initializing Input state
  };

  componentDidUpdate(prevProps) {
    const {editTask} = this.props
    if (prevProps.editTask !== editTask && editTask) { //getting editTask status with props
      this.setState({ input: editTask.text });
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value }); // To get the value of the Input entered in Input section
  };

  handleSubmit = (e) => { //form submission Function
    e.preventDefault();
    const { addTask, editTask, updateTask } = this.props;
    const { input } = this.state;

    if (editTask) {
      updateTask(editTask.id, input);
    } else {
      addTask(input);
    }
    this.setState({ input: '' }); //After adding, setting Input bar Empty
  };

  render() {
    const { input } = this.state;
    const { editTask } = this.props;

    return (
      <form className="task-input-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={this.handleChange}
          required
        /> 
        <button type="submit">
          {editTask ? 'Update Task' : 'Add Task'} 
        </button>
      </form>
    );
  }
}

export default TaskInput;