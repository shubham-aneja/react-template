import types from '../actions/types'

const DEFAULT_STATE = {
    loading: false,
    error: '',
    planetInfo: {}
};

export default (state = DEFAULT_STATE, action = {})=> {
    switch (action.type) {

        case types.PLANET_DETAIL_SET_LOADING:
        {
            return {...state, loading: action.loading}
        }
        case types.PLANET_DETAIL_SET_ERROR:
        {
            return {...state, error: action.error}
        }
        case types.PLANET_DETAIL_SET_PLANET_DETAILS:
        {
            return {...state, planetInfo: action.planetInfo}
        }
        case types.PLANET_DETAIL_DESTROY:
        {
            return {}
        }
        default :
        {
            return state;
        }
    }
}