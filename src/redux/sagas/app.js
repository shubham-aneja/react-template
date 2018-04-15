/*
 import { watchOnLogin, watchOnLogout } from './login'
 */
import {all} from 'redux-saga/effects'
import { watchFetchPlanets} from './planetList'
import { watchFetchPlanetDetail} from './planetDetail'
import {watchLogin, watchLogout} from './login.js'

export default function* app() {
    yield all([
        watchFetchPlanets(),
        watchFetchPlanetDetail(),
        watchLogin(),
        watchLogout()
    ])
}