import types from '../actions/types'
import {List, Map, fromJS} from 'immutable'
import {setItemInState} from './utils'

const DEFAULT_STATE = fromJS({
    loading: false,
    error: '',
    planets: []
});

export default (state = DEFAULT_STATE, action = {})=> {
    switch (action.type) {

        case types.PLANET_LIST_SET_LOADING:
        {
            return setItemInState('loading', state, action);
        }
        case types.PLANET_LIST_SET_ERROR:
        {
            return setItemInState('error', state, action);

        }
        case types.PLANET_LIST_SET_PLANETS:
        {
            return setItemInState('planets', state, action, fromJS(action.planets));

        }
        case types.PLANET_LIST_DESTROY:
        {
            return Map()
        }
        default :
        {
            return state;
        }
    }
}