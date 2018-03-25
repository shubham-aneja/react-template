import {applyMiddleware} from 'redux'
import loggerMiddleware from './logger.js'
import Thunk from 'redux-thunk'



export default  applyMiddleware(Thunk, loggerMiddleware)