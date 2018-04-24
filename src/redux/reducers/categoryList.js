import types from '../actions/types'
import {Map, fromJS} from 'immutable'
import {setItemInState} from './utils'
import {createReducer} from '../../utils/helpers'

const DEFAULT_STATE = fromJS({
    loading: false,
    error: '',
    categories: []

});

export default {categories: createReducer(DEFAULT_STATE, {
    [types.CATEGORY_LIST_SET_LOADING](state, action){
        return setItemInState('loading', state, action);
        
    },
    [types.CATEGORY_LIST_SET_ERROR](state, action){
        return setItemInState('error', state, action);
        
    },
    [types.CATEGORY_LIST_SET_CATEGORIES](state, action){
        return setItemInState('categories', state, action, fromJS(action.categories));
    },
    [types.CATEGORY_LIST_DESTROY](state, action){
        return Map()
    }
})}