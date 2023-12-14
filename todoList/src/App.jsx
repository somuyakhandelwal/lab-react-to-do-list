import React, { Component } from "react";
import './App.css';

class DisplayItem extends Component {
  render() {
    const { value, onChange, onDelete } = this.props;

    return (
      <div className='Change'>
        <input type="text" value={value} onChange={onChange} />
        <button type='delete' onClick={onDelete}>
          Delete Task
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: '',
    });
  };

  handelTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  RemoveTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  TaskEdit = (index, e) => {
    const { value } = e.target;
    const newTasks = [...this.state.tasks];
    newTasks[index] = value;
    this.setState({ tasks: newTasks });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className='Body'>
        <div className='Input'>
          <div className="Taskinput">
            <input
              type="text"
              value={newTask}
              placeholder='Enter a task'
              onChange={this.handelTaskChange}
            />
          </div>
          <div>
            <button type='add' onClick={this.addTask}>
              Add Task
            </button>
          </div>
        </div>
        <div>
          {tasks.map((task, index) => (
            <DisplayItem
              key={index}
              value={task}
              onChange={(e) => this.TaskEdit(index, e)}
              onDelete={() => this.RemoveTask(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
