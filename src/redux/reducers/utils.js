export function setItemInState(item, state, action, value) {
    return state.set(item, value || action[item])
}
