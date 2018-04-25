import React, {  PureComponent } from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import store from './redux'
import {onEnter} from './configurations/routes.js'
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom'


import { NotFound, ContactUs} from './components'
import {Login, Home} from './containers'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="app__container">
          <BrowserRouter>
            <Switch>
              <Route path="/contactus" component={ContactUs} onEnter={onEnter}></Route>
              <Route path="/login" component={Login} onEnter={onEnter}></Route>
              <Route path="/home" component={Home} onEnter={onEnter}></Route>
              <Redirect path='/' to='/home'></Redirect>
              <Route component={NotFound}></Route>
            </Switch>

          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;

