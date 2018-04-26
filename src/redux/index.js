import {applyMiddleware, createStore, compose} from 'redux';
import RootReducer from './reducers'
import chainedMiddlewares from './middlewares/index'
import Immutable from 'immutable'
import watcherSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

// eslint-disable-next-line no-underscore-dangle
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  devTools = a => a;
}

const sagaMiddleware = createSagaMiddleware();

const DefaultState = Immutable.Map();

let store;

if (devTools) {
  store = createStore(
    RootReducer,
    DefaultState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        ...chainedMiddlewares
      )
      , devTools
    )
  )

} else {
  store = createStore(
    RootReducer,
    DefaultState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        ...chainedMiddlewares
      )
    )
  )

}

sagaMiddleware.run(watcherSaga);

export default store;