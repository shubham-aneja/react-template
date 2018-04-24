/*
 import { watchOnLogin, watchOnLogout } from './login'
 */
import {all} from 'redux-saga/effects'
import { watchFetchPlanets} from './planetList'
import { watchFetchPlanetDetail} from './planetDetail'
import {watchLogin, watchLogout} from './login.js'
import {watchFetchCategories} from './categoryList.js'
import {watchFetchProducts} from './productList.js'

export default function* app() {
    yield all([
        watchFetchProducts(),
        watchFetchCategories(),
        watchFetchPlanets(),
        watchFetchPlanetDetail(),
        watchLogin(),
        watchLogout()
    ])
}