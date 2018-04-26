import { put, takeLatest} from 'redux-saga/effects'
import { types, categoryListSetLoading, categoryListSetCategories, categoryListSetError } from '../actions/'
import {mockedCategories} from './mockedDB.js'
import {URLS} from '../../configurations/config.js'
import { api } from '../../utils/api'

const PLANET_GET_URL = URLS.PLANET_LIST;
//const CATEGORY_LIST_URL = URLS.CATEGORY_LIST;

function* fetchCategories(action) {

  try {
    yield put(categoryListSetLoading(true));
    /*todo: just replace the url with category url, and response */
    /*const response = */yield api(PLANET_GET_URL);
    //const results = response.results;
    yield put(categoryListSetLoading(false));
    /*todo replace mockedCategories with the actual array of categories returned from api*/
    yield put(categoryListSetCategories(mockedCategories))
  }
  catch (err) {
    yield put(categoryListSetLoading(false));
    yield categoryListSetError("Something went wrong: " + err.message);
  }
}


export function* watchFetchCategories() {
  yield takeLatest(types.CATEGORY_LIST_FETCH_CATEGORIES, fetchCategories)
}
