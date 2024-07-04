import React, { Component } from 'react';//Importing react Component
import TaskInput from './components/TaskInput/TaskInput';//Importing TaskInput component
import TaskList from './components/TaskList/TaskList'; //Importing TaskList component
import './App.css';

class App extends Component { //Extending Class component
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],   //Initialize State
    editTask: null
  };

  componentDidUpdate(prevProps, prevState) {    //Data fetching and setting up
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  addTask = (task) => {   //Add task Function
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: Date.now(), text: task, completed: false }]
    }));
  };

  deleteTask = (id) => {  //Delete Function
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  };

  updateTask = (id, newText) => { //Update task Function
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      ),
      editTask: null
    }));
  };

  editCurrentTask = (task) => {  //Edit current task Function
    this.setState({ editTask: task });
  };

  toggleComplete = (id) => { // Toggling according to task status
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  render() { //starts rendering
    const { tasks, editTask } = this.state;

    return (
      <div className="App">
        <h1>Todo App</h1>
        <TaskInput   //TaskInput components with props
          addTask={this.addTask}
          editTask={editTask}
          updateTask={this.updateTask}
        />
        <TaskList  //passing props for TaskList Component
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