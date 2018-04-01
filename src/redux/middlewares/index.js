import {applyMiddleware} from 'redux';
import loggerMiddleware from './logger.js';
import Thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import { browserHistory} from 'react-router'


const routerMiddleWare = routerMiddleware(browserHistory);


export default  applyMiddleware(routerMiddleWare, Thunk, loggerMiddleware)