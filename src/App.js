import React, {  PureComponent, Fragment } from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import store from './redux'
import { BrowserRouter, Route , Switch, Redirect} from 'react-router-dom'


import { NotFound, ContactUs} from './components'
import {Login, Home} from './containers'

class App extends PureComponent {
  render() {

    return (
      <Provider store={store}>
        <div className="app__container">
          <BrowserRouter>
            <Fragment>
              <Route path="**" component={({history, match})=>{
              const isLoggedIn =  localStorage.getItem('userInfo');
              if(match.url === "/login"){
                      if(isLoggedIn) {
                        history.replace('/')
                      }
              } else {
                if(!isLoggedIn) {
                  history.replace('/login')
                }
              }
              return (null)
              }}></Route>
              <Switch>
                <Route path="/contactus" component={ContactUs}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
                <Redirect path='/' to='/home'></Redirect>
                <Route component={NotFound}></Route>
              </Switch>
            </Fragment>

          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;

