import React, { Component } from 'react';
import './TaskList.css';

class TaskList extends Component {
  render() {
    const { tasks, deleteTask, editCurrentTask, toggleComplete } = this.props;

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

export default TaskList;