import React, { PureComponent, Fragment} from 'react';
import './Home.scss';
import { Router, Route} from 'react-router'
import {TaskList} from '../'
import {AddTask, PlanetList, PlanetDetail, Dashboard, Products} from '../../containers'
import {Terms, ContactUs} from '../../components'


const TaskDashboard = ()=> (<div className='center-aligned'><TaskList></TaskList>
  <AddTask></AddTask>
</div>);


export default class HomeRoute extends PureComponent {
  render() {
    const {history } = this.props;
    return (
      <Fragment>
        <Router key='router' history={history}>
          <Route path="home">
            <Route path="terms" component={Terms}></Route>
            <Route path="contact-us" component={ContactUs}></Route>
            <Route path="dashboard" component={Dashboard}>
              <Route path="/" component={Dashboard}/>
              <Route path="products" component={Products}/>
            </Route>
            <Route path="tasks" component={TaskDashboard}></Route>
            <Route path="planets" component={PlanetList}></Route>
            <Route path="planet/:id" component={PlanetDetail}></Route>
          </Route>

        </Router>

        <div>
        </div>
      </Fragment>
    )
  }
}