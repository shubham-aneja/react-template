import {combineReducers} from 'redux';
import taskReducer from './tasks.js'

const rootReducer =  combineReducers({
    tasks: taskReducer
});

export default rootReducer
