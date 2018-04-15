import types from '../actions/types'
import Imm,{Map, fromJS} from 'immutable'
import {setItemInState} from './utils'
import {createReducer} from '../../utils/helpers'

window.Imm = Imm;

const DEFAULT_STATE = fromJS({
    loading: false,
    error: '',
    planetInfo: {}
});


export default {
    planetDetail: createReducer(DEFAULT_STATE, {
        [types.PLANET_DETAIL_SET_PLANET_DETAILS](state, action){
            return setItemInState('planetInfo', state, action, fromJS(action.planetInfo))

        },
        [types.PLANET_DETAIL_SET_ERROR](state, action){
            return setItemInState('error', state, action)

        },
        [types.PLANET_DETAIL_SET_LOADING](state, action){
            return setItemInState('loading', state, action)

        },
        [types.PLANET_DETAIL_DESTROY](state, action){
            return Map()
        }
    })
}