import types from '../actions/types'
import {Map} from 'immutable'
import {setItemInState} from './utils'

const DEFAULT_STATE = Map({
    username: 'Luke Skywalker',
    password: '19BBY'
});

export default (state = DEFAULT_STATE, action = {})=> {
    switch (action.type) {

        case types.LOGIN_USERNAME_CHANGE :
        {
            return setItemInState('username', state, action)
        }
        case types.LOGIN_PASSWORD_CHANGE:
        {
            return setItemInState('password', state, action)
        }
        case types.LOGIN_SET_LOADING:
        {
            return setItemInState('loading', state, action)
        }
        case types.LOGIN_SET_ERROR:
        {
            return setItemInState('error', state, action)
        }
        case types.LOGIN_DESTROY:
        {
            return Map()
        }
        default :
        {
            return state;
        }
    }
}

