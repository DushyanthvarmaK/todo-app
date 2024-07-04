import React, { Component } from 'react';
import './TaskList.css'; //Importing css properties

class TaskList extends Component { //Extending class Component with TaskList
  render() {
    const { tasks, deleteTask, editCurrentTask, toggleComplete } = this.props;// getting the props we passed in App.js to implement

    return (  
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            {task.text}
            <div className="task-actions">
              <button onClick={() => toggleComplete(task.id)}> 
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => editCurrentTask(task)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList; //Export TaskList to use in App.js