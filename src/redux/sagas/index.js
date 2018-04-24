import {fork} from 'redux-saga/effects'
import app from './app'

/*
 export default  app
 Just this would have also work, todo then why do we need
 export default function*(){
 yield fork(app)
 }

 */

export default function*() {
    yield fork(app)
}