import React, { PureComponent} from 'react';
import './Home.scss';
import { Router, Route} from 'react-router'
import {TaskList} from '../'
import {AddTask, PlanetList} from '../../containers'
import {Terms, ContactUs} from '../../components'


const WelcomeComp = ()=>(<div><h2 className="home__welcome-header">
    Welcome to home component</h2></div>);


const TaskDashboard = ()=> (<div className='center-aligned'><TaskList></TaskList>
    <AddTask></AddTask>
</div>);



export default class HomeRoute extends PureComponent {
    render(){
        const {history } = this.props;
        return (<div>

            <Router history={history}>


                <Route path="/terms" component={Terms}></Route>
                <Route path="/contact-us" component={ContactUs}></Route>
                <Route path="/" component={WelcomeComp}></Route>
                <Route path="/tasks" component={TaskDashboard}></Route>
                <Route path="/planets" component={PlanetList}></Route>
            </Router>
        </div>)
    }
}