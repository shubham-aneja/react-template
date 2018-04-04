import {combineReducers} from 'redux';
import taskReducer from './tasks.js'
import login from './login.js'
import planetList from './planetList.js'
import { routerReducer } from 'react-router-redux'

const rootReducer =  combineReducers({
    tasks: taskReducer,
    routing: routerReducer,
    login,
    planetList
});

export default rootReducer
