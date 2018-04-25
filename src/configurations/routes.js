/* use childROutes: https://scotch.io/courses/using-react-router-4/child-routes

 /users par users ka list dikhe
 /users/1 par list to dikhe hi sath me first user ka detail b dikhe
 */

export function onEnter(nextState, transition, callback) {
    alert('on enter called')
    const { pathname } = nextState.location;
    const isLoggedIn = localStorage.getItem('userInfo');
    if (isLoggedIn) {
        if (pathname === '/login') {
            transition('/')
        }
    }
    else {
        if (pathname !== '/login') {
            transition('/login')
        }

    }
    return callback();
}