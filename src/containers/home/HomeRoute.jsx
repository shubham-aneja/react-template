import React, { PureComponent, Fragment} from 'react';
import './Home.scss';
import {TaskList} from '../'
import {AddTask, PlanetList, PlanetDetail, Dashboard} from '../../containers'
import {Terms, ContactUs} from '../../components'
import { Route, Switch , Redirect} from 'react-router-dom'


const TaskDashboard = ()=> (<div className='center-aligned'><TaskList></TaskList>
  <AddTask></AddTask>
</div>);


export default class HomeRoute extends PureComponent {
  render() {
    const {match: {url} } = this.props;
    return (
    <Fragment>
      <Switch>
        <Route path={`${url}/terms`} component={Terms}></Route>
        <Route path={`${url}/contact-us`} component={ContactUs}></Route>
        <Route path={`${url}/dashboard`} component={Dashboard}></Route>
        <Route path={`${url}/planets`} component={PlanetList}></Route>
        <Route path={`${url}/planet/:id`} component={PlanetDetail}></Route>
        <Route path={`${url}/tasks`} component={TaskDashboard}></Route>
        <Redirect to={`${url}/dashboard`}></Redirect>
      </Switch>
      <div></div>
    </Fragment>
    )
  }
}
