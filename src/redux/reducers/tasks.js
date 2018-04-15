import types from '../actions/types'
import {Map, fromJS} from 'immutable'
import {createReducer} from '../../utils/helpers'

let NEXT_ID = 3;
const TASK_DUMMY_DATA = [
    {
        title: 'Reducer Task1',
        id: 0
    },
    {
        title: 'Reducer Task2',
        id: 1
    },
    {
        title: 'Reducer Task3',
        id: 2
    }
];


export default {
    tasks: createReducer(fromJS(TASK_DUMMY_DATA), {
        [types.ADD_TASK ](state, action){
            const {title} = action.payload;
            let newRecord = Map({id: NEXT_ID++, title});
            return state.push(newRecord);
        }
    })
}