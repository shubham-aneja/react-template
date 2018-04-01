import React, {  PureComponent } from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import { Router, browserHistory} from 'react-router'
import {  syncHistoryWithStore } from 'react-router-redux'
import store from './redux'
import Routes from './configurations/routes.js'


const history = syncHistoryWithStore(browserHistory, store)

/*
 class App extends PureComponent {
 /!*this will have headers... footers.... navigation,... and a body portion*!/
 /!*???*!/

 /!*this will show login/signup/app/contactUs/profile pages*!/
 /!*???*!/

 render() {
 const {match: {path: currentPath }}= this.props

 return (
 <div className="App">

 <Router history={this.props.history}>
 <Switch>
 <Route path={`${currentPath }/home`} component={Home}/>
 <Route path={`${currentPath }/contactUs`} component={ContactUs}/>
 <Redirect to={`${currentPath }/home`}></Redirect>
 </Switch>
 </Router>
 </div>
 );
 }
 }
 */


class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <div className="app__container">
                    <div className="app__router-container">
                        <Router routes={Routes} history={history}>
                            <div>Inside ConnectedROuter</div>
                        </Router>
                    </div>
                </div>
            </Provider>
        )
    }
}
export default App;
