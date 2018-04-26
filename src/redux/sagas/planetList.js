import { put, takeLatest /*, select */} from 'redux-saga/effects'
import { api } from '../../utils/api'
import { types, planetListSetLoading, planetListSetPlanets, planetListSetError } from '../actions'
import {URLS} from '../../configurations/config.js'

const PLANET_GET_URL = URLS.PLANET_LIST;

function* fetchPlanets(action) {

    try {
        yield put(planetListSetLoading(true))
        const response = yield api(PLANET_GET_URL);
        const results = response.results;
        yield put(planetListSetLoading(false));
        yield put(planetListSetPlanets(results))
    }
    catch (err) {
        yield put(planetListSetLoading(false));
        yield planetListSetError("Something went wrong");
    }
}

export function* watchFetchPlanets() {
    yield takeLatest(types.PLANET_LIST_FETCH_PLANETS, fetchPlanets)
}
