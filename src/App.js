import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import AddTask from './components/add-task'
const TASK_DUMMY_DATA = [
    {
        title: 'Task1',
        id: 0
    },
    {
        title: 'Task2',
        id: 1
    },
    {
        title: 'Task3',
        id: 2
    }
];

let nextId = 3;
class App extends Component {
    constructor(p) {
        super(p);
        this.state = {
            tasks: TASK_DUMMY_DATA
        };
        this.onTaskInsert = this.onTaskInsert.bind(this);
    }

    onTaskInsert(title) {
        this.setState({
            tasks: [{title, id: nextId++}, ...this.state.tasks]
        })
    }

    render() {
        return (
            <div className="App">
                <Home tasks={this.state.tasks}/>
                <AddTask onTaskInsert={this.onTaskInsert}/>
            </div>
        );
    }
}

export default App;
