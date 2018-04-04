import React, { PureComponent, Component} from 'react';
import {connect} from 'react-redux'
import {loginDoLogout} from '../../redux/actions/'
import './Home.scss';
import { Router, Route, Link } from 'react-router'
import {TaskList} from '../'
import {AddTask, Header} from '../../containers'
import {NavBar, Footer, Terms, ContactUs} from '../../components'


export default  class Home extends PureComponent {

    render() {
        const {router: history} = this.props;
        /*                           <Route path="inbox" component={Inbox}>
         <Route path="messages/:id" component={Message}/>

         </Route>*/
        return (
            <div className="home">

                <div className="home__headers">
                    <Header></Header>

                    <NavBar></NavBar>
                </div>
                <div className="home__body">

                        <RouteElms history={history}></RouteElms>

                </div>
                <div className="home__footer">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}


const WelcomeComp = ()=>(<div><h2 className="home__welcome-header">
    Welcome to home component</h2></div>);

const TaskDashboard = ()=> (<div><TaskList></TaskList>
    <AddTask></AddTask>
</div>);


class RouteElms extends PureComponent {
    render(){
        const {history } = this.props;
        return (<div>

            <Router history={history}>


                <Route path="/terms" component={Terms}></Route>
                <Route path="/contact-us" component={ContactUs}></Route>
                <Route path="/" component={WelcomeComp}></Route>
                <Route path="/tasks" component={WelcomeComp}></Route>
                <Route path="/planets" component={WelcomeComp}></Route>
            </Router>
        </div>)
    }
}