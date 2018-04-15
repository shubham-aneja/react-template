
export function createReducer(initialState, handlers) {
    return (state = initialState, action = {})=> {
        if ({}.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state;
        }
    }
}