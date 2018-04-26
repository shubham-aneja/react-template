import types from '../actions/types'
import {Map, fromJS} from 'immutable'
import {setItemInState} from './utils'
import {createReducer} from '../../utils/helpers'

const DEFAULT_STATE = fromJS({
    loading: false,
    error: '',
    products: []
});

export default {products: createReducer(DEFAULT_STATE, {
    [types.PRODUCT_LIST_SET_LOADING](state, action){
        console.log('111 999 setting loading...', action.loading)

        return setItemInState('loading', state, action);
        
    },
    [types.PRODUCT_LIST_SET_ERROR](state, action){
        return setItemInState('error', state, action);
        
    },
    [types.PRODUCT_LIST_SET_PRODUCTS](state, action){
        console.log('111 999 setting products...', action.products)
        return setItemInState('products', state, action, fromJS(action.products));
    },
    [types.PRODUCT_LIST_DESTROY](state, action){
        return Map()
    }
})}