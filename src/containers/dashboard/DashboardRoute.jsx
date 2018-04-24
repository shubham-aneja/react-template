import React from 'react';
import { Router, Route} from 'react-router'
import {TaskList} from '../'
import {AddTask, PlanetList, PlanetDetail, Dashboard} from '../../containers'
import {ProductDashboard} from '../../components'


export default (props)=> {
  const {history } = props;
  return (
    <Router history={history}>
      <Route path="/home/dashboard/products" component={ProductDashboard}></Route>
      <Route path="" component={ProductDashboard}></Route>
    </Router>
  )
}
