import React, {  PureComponent } from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import { Router, browserHistory} from 'react-router'
import {  syncHistoryWithStore } from 'react-router-redux'
import store from './redux'
import Routes from './configurations/routes.js'


const history = syncHistoryWithStore(
    browserHistory,
    store,
    {
        selectLocationState(state) {
            return state.get('routing')
        }
    }
);


class App extends PureComponent {
    render() {

        return (
            <Provider store={store}>
                <div className="app__container">
                    <Router routes={Routes} history={history}>
                    </Router>
                </div>
            </Provider>
        )
    }
}
export default App;
