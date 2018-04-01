import React, {  PureComponent } from 'react';
import './App.css';
import {Home} from './containers'
import {Provider} from 'react-redux';
import { Switch, Route, Redirect} from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store from './redux'

import createHistory from 'history/createBrowserHistory'
import Login from './components/login'
import ContactUs from './components/contact-us'
const history = createHistory();


class App extends PureComponent {
    /*this will have headers... footers.... navigation,... and a body portion*/
    /*???*/

    /*this will show login/signup/app/contactUs/profile pages*/
    /*???*/

    render() {
        const {match: {path: currentPath }}= this.props

        return (
            <div className="App">

                <ConnectedRouter history={this.props.history}>
                    <Switch>
                        <Route path={`${currentPath }/home`} component={Home}/>
                        <Route path={`${currentPath }/contactUs`} component={ContactUs}/>
                        <Redirect to={`${currentPath }/home`}></Redirect>
                    </Switch>
                </ConnectedRouter>
            </div>
        );
    }
}


class ProviderApp extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/app" component={App}/>
                        <Route path="/login" component={Login}/>
                        <Redirect to={`login`}></Redirect>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}
export default ProviderApp;
