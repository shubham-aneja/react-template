import React, { Component} from 'react';
import './Home.css';
import {TaskList} from '../'
import {AddTask} from '../../containers'
import {NavBar} from '../../components'
import {Header} from '../../components'
import {Footer} from '../../components'


export default class Home extends Component {
    render() {

        return (
            <div className="Home-app">
                <h2>Home from Index</h2>

                <Header></Header>
                <TaskList></TaskList>
                <NavBar></NavBar>
                    <AddTask></AddTask>
                <Footer></Footer>
            </div>
        );
    }
}

