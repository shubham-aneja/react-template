import {applyMiddleware} from 'redux';
import loggerMiddleware from './logger.js';
import Thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

const historyObj = createHistory();

const routerMiddleWare = routerMiddleware(historyObj);


export default  applyMiddleware(routerMiddleWare, Thunk, loggerMiddleware)