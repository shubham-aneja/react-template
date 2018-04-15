import {fork} from 'redux-saga/effects'
import app from './app'

export default function*(){
    console.log('foring app saga...');
    yield fork(app)
}