import {createStore} from 'redux';
import RootReducer from './reducers'
import chainedMiddlewares from './middlewares/index'
import Immutable from 'immutable'


/*Replace this object with any default state you wanted*/
const DefaultState = Immutable.Map();


export default createStore(RootReducer, DefaultState, chainedMiddlewares);
