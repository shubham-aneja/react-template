import types from '../actions/types'
import {Map, fromJS} from 'immutable'
import {setItemInState} from './utils'
import {createReducer} from '../../utils/helpers'

const DEFAULT_STATE = fromJS({
    loading: false,
    error: '',
    planets: []
});


export default {planetList: createReducer(DEFAULT_STATE, {
    [types.PLANET_LIST_SET_LOADING](state, action){
        return setItemInState('loading', state, action);

    },
    [types.PLANET_LIST_SET_ERROR](state, action){
        return setItemInState('error', state, action);

    },
    [types.PLANET_LIST_SET_PLANETS](state, action){
        return setItemInState('planets', state, action, fromJS(action.planets));
    },
    [types.PLANET_LIST_DESTROY](state, action){
        return Map()
    }
})}