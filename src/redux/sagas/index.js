import {fork} from 'redux-saga/effects'
import app from './app'

export default function*(){
    yield fork(app)
}