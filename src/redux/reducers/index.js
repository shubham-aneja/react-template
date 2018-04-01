import {combineReducers} from 'redux';
import taskReducer from './tasks.js'
import login from './login.js'
import { routerReducer } from 'react-router-redux'

const rootReducer =  combineReducers({
    tasks: taskReducer,
    routing: routerReducer,
    login
});

export default rootReducer
