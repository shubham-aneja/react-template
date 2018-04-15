import { put, takeLatest/*, select */} from 'redux-saga/effects'
import { api } from '../../utils/api'

import { types, planetDetailSetDetails, planetDetailSetLoading, planetDetailSetError} from '../actions'
const PLANET_GET_URL = `https://swapi.co/api/planets`;


function* fetchPlanetDetails(action) {
    try {
        yield put(planetDetailSetError(''));
        yield put(planetDetailSetLoading(false));
        const response = yield api(`${PLANET_GET_URL}/${action.planetId}`);
        yield put(planetDetailSetLoading(false));
        yield put(planetDetailSetDetails(response));
    }
    catch (err) {
        yield put(planetDetailSetLoading(false));
        yield put(planetDetailSetError("Something went wrong"));
    }
}

export function* watchFetchPlanetDetail() {
    yield takeLatest(types.PLANET_DETAIL_FETCH_PLANET_DETAILS, fetchPlanetDetails)
}
