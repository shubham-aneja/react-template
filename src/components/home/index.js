
import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="Home-app">
        <div>Home</div>
        <ol>
          {tasks && tasks.map(task => {
            return (<li key={task.id}>{task.title}</li>)
          })}
        </ol>
      </div>
    );
  }
}

export default Home;
