import React, { Component} from 'react';
import './Home.css';
import TaskList from '../task-list'
import AddTask from '../add-task'
import NavBar from '../nav-bar'
import Header from '../header'
import Footer from '../footer'

export default class Home extends Component {
    render() {

        return (
            <div className="Home-app">
                <h2>Home</h2>

                <Header></Header>

                <NavBar></NavBar>
                    <TaskList/>
                    <AddTask></AddTask>
                <Footer></Footer>
            </div>
        );
    }
}

