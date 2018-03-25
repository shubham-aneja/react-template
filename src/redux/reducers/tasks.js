import types from '../actions/types'
let NEXT_ID = 3
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

export default (state = TASK_DUMMY_DATA, action = {})=> {
    switch (action.type) {
        case types.ADD_TASK :
        {
            const {title} = action.payload;
            return [...state, {id: NEXT_ID++, title}]
        }
            default : {
                return state;
            }
    }
}