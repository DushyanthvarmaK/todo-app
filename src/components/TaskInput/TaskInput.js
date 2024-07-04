import React, { Component } from 'react';
import './TaskInput.css';

class TaskInput extends Component {
  state = {
    input: ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps.editTask !== this.props.editTask && this.props.editTask) {
      this.setState({ input: this.props.editTask.text });
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTask, editTask, updateTask } = this.props;
    const { input } = this.state;

    if (editTask) {
      updateTask(editTask.id, input);
    } else {
      addTask(input);
    }
    this.setState({ input: '' });
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