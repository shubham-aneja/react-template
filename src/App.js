import React, { Component, PureComponent } from 'react';
import './App.css';
import Home from './components/home/index'
import AddTask from './components/add-task'

import store from './redux'

import {Provider} from 'react-redux';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Home />
                <AddTask />
            </div>
        );
    }
}


class ProviderApp extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
export default ProviderApp;
