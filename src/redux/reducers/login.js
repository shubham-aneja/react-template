import types from '../actions/types'
import {Map} from 'immutable'
import {setItemInState} from './utils'
import {createReducer} from '../../utils/helpers'

const DEFAULT_STATE = Map({
    username: 'Luke Skywalker',
    password: '19BBY'
});

export default {
    login: createReducer(
        DEFAULT_STATE,
        {
            [types.LOGIN_USERNAME_CHANGE] (state, action) {
                return setItemInState('username', state, action);
            },
            [types.LOGIN_PASSWORD_CHANGE] (state, action) {
                return setItemInState('password', state, action);
            },
            [types.LOGIN_SET_LOADING] (state, action) {
                return setItemInState('loading', state, action);
            },
            [types.LOGIN_SET_ERROR] (state, action) {
                return setItemInState('error', state, action);
            },
            [types.LOGIN_DESTROY] (state, action) {
                return Map();
            }
        }
    )
}