import { put, takeLatest } from 'redux-saga/effects'
import { types, productListSetLoading, productListSetProducts, productListSetError } from '../actions'
import {mockedProducts} from './mockedDB'
import {URLS} from '../../configurations/config.js'
import { api } from '../../utils/api'

const PLANET_GET_URL = URLS.PLANET_LIST;
//const CATEGORY_LIST_URL = URLS.CATEGORY_LIST;

function* fetchProducts(action) {

  try {

    /*todo: just replace the url with category url, and response */
    yield put(productListSetLoading(true));
    /*const response = */yield api(PLANET_GET_URL);
    //const results = response.results;

    yield put(productListSetLoading(false));
    console.log('888 category id in product list saga', action)
    yield put(productListSetProducts(mockedProducts(action.categoryId)))
  }
  catch (err) {
    console.log('111 999 error', err);
    yield put(productListSetLoading(false));
    yield put(productListSetError(`Something went wrong: ${err.message}`));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(types.PRODUCT_LIST_FETCH_PRODUCTS, fetchProducts)
}
