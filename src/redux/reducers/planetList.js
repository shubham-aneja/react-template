import types from '../actions/types'

const DEFAULT_STATE = {
    loading: false,
    error: '',
    planets: []
};

export default (state = DEFAULT_STATE, action = {})=> {
    switch (action.type) {

        case types.PLANET_LIST_SET_LOADING:
        {
            return {...state, loading: action.loading}
        }
        case types.PLANET_LIST_SET_ERROR:
        {
            return {...state, error: action.error}
        }
        case types.PLANET_LIST_SET_PLANETS:
        {
            return {...state, planets: action.planets}
        }
        case types.PLANET_LIST_DESTROY:
        {
            return {}
        }
        default :
        {
            return state;
        }
    }
}