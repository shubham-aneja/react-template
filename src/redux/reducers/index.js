import { combineReducers } from 'redux-immutable'
import tasks from './tasks'
import login from './login'
import planetList from './planetList'
import categories from './categoryList.js'
import productList from './productList.js'
import planetDetail from './planetDetail'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  ...tasks,
  routing: routerReducer,
  ...login,
  ...planetList,
  ...planetDetail,
  ...categories,
  ...productList
});

export default rootReducer
