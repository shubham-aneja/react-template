import { combineReducers } from 'redux-immutable'
import taskReducer from './tasks'
import login from './login'
import planetList from './planetList'
import planetDetail from './planetDetail'
import { routerReducer } from 'react-router-redux'

const rootReducer =  combineReducers({
    tasks: taskReducer,
    routing: routerReducer,
    login,
    planetList,
    planetDetail
});

export default rootReducer
