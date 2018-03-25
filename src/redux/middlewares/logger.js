export default ({ getState }) => (next) => action => {
    console.log('[Logger]: this action will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('[Logger]: state after the action dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue /* this "next(action)" is mandatory to return, so that
     the next middleware can be called */
}
