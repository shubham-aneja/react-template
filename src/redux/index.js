import {createStore} from 'redux';
import RootReducer from './reducers'
import chainedMiddlewares from './middlewares/index'


/*Replace this object with any default state you wanted*/
const DefaultState = {
};


export default createStore(RootReducer, DefaultState, chainedMiddlewares);
