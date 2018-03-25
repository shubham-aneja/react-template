import {combineReducers} from 'redux';
import taskReducer from './tasks.js'
import { routerReducer } from 'react-router-redux'

const rootReducer =  combineReducers({
    tasks: taskReducer,
    router: routerReducer
});

export default rootReducer
