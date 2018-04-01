import React, { Component} from 'react';
import {connect} from 'react-redux'
import {loginDoLogout} from '../../redux/actions/'
import './Home.scss';
import {TaskList} from '../'
import {AddTask} from '../../containers'
import {NavBar} from '../../components'
import {Header} from '../../components'
import {Footer} from '../../components'


class Home extends Component {
    render() {
        const {loginDoLogout} = this.props
        return (
            <div className="Home-app">
                <h2>Home from Index</h2>

                <Header></Header>
                <TaskList></TaskList>
                <NavBar></NavBar>
                <AddTask></AddTask>
                <Footer></Footer>

                <div onClick={loginDoLogout}>logout</div>
            </div>
        );
    }
}
const mapDispatchToProps = {
    loginDoLogout
};


const ConnectedHome = connect(undefined, mapDispatchToProps)(Home);

export default ConnectedHome
