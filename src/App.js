import React, { Component } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import './App.css';

class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    editTask: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: Date.now(), text: task, completed: false }]
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  };

  updateTask = (id, newText) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      ),
      editTask: null
    }));
  };

  editCurrentTask = (task) => {
    this.setState({ editTask: task });
  };

  toggleComplete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  render() {
    const { tasks, editTask } = this.state;

    return (
      <div className="App">
        <h1>Todo App</h1>
        <TaskInput
          addTask={this.addTask}
          editTask={editTask}
          updateTask={this.updateTask}
        />
        <TaskList
          tasks={tasks}
          deleteTask={this.deleteTask}
          editCurrentTask={this.editCurrentTask}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;