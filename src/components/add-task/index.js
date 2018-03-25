
import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  constructor(p) {
    super(p);
    this.state = {
      newTaskTitle: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextUpdate = this.onTextUpdate.bind(this);
  }

  onSubmit() {
    this.setState({ newTaskTitle: '' });
    this.props.onTaskInsert(this.state.newTaskTitle)
  }

  onTextUpdate(e) {
    this.setState({ newTaskTitle: e.target.value });
  }

  render() {
    return (
      <div >
        <div>Add a task from here</div>
        <input value={this.state.newTaskTitle} onChange={this.onTextUpdate} />
        <div onClick={this.onSubmit}>Add task</div>
      </div>
    );
  }
}

export default AddTask;
