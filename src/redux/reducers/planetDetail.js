import types from '../actions/types'
import Imm,{Map, fromJS} from 'immutable'
import {setItemInState} from './utils'

window.Imm = Imm;

const DEFAULT_STATE = fromJS({
    loading: false,
    error: '',
    planetInfo: {}
});

export default (state = DEFAULT_STATE, action = {})=> {
    switch (action.type) {

        case types.PLANET_DETAIL_SET_LOADING:
        {
            return setItemInState('loading', state, action)
        }
        case types.PLANET_DETAIL_SET_ERROR:
        {
            return setItemInState('error', state, action)
        }
        case types.PLANET_DETAIL_SET_PLANET_DETAILS:
        {
            /*todo what is planetInfo in action, need to be translated into immutable*/
            return setItemInState('planetInfo', state, action, fromJS(action.planetInfo))
        }
        case types.PLANET_DETAIL_DESTROY:
        {
            return Map()
        }
        default :
        {
            return state;
        }
    }
}