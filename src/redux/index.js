import {applyMiddleware, createStore, compose} from 'redux';
import RootReducer from './reducers'
import chainedMiddlewares from './middlewares/index'
import Immutable from 'immutable'
import watcherSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const DefaultState = Immutable.Map();

const store = createStore(
    RootReducer,
    DefaultState,
    compose(
        applyMiddleware(
            sagaMiddleware,
            ...chainedMiddlewares
        ),
        reduxDevTools
    )
)

sagaMiddleware.run(watcherSaga);

export default store;