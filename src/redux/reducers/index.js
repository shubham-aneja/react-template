import {combineReducers} from 'redux';
import taskReducer from './tasks.js'
import { routerReducer } from 'react-router-redux'

const rootReducer =  combineReducers({
    tasks: taskReducer,
    routing: routerReducer
});

export default rootReducer
