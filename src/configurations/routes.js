import { NotFound, ContactUs} from '../components'
import {Login, Home} from '../containers'


/* use childROutes: https://scotch.io/courses/using-react-router-4/child-routes

 /users par users ka list dikhe
 /users/1 par list to dikhe hi sath me first user ka detail b dikhe
 */

export default [
    {
        path: '/', component: Home, onEnter, childRoutes: [
        {path: 'contact-us'},
        {path: 'tasks'},
        {path: 'planets'},
        {path: 'terms'}
    ]
    },
    {path: 'contactus', component: ContactUs, onEnter},
    {path: 'login', component: Login, onEnter},
    {path: '**', component: NotFound}
]

function onEnter(nextState, transition, callback) {
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