import { put, takeLatest } from 'redux-saga/effects'
import { types, productListSetLoading, productListSetProducts, productListSetError } from '../actions'

function* fetchProducts(action) {

  try {
    let x = put(productListSetLoading(true));
    yield x;
    //const response = yield api(PRODUCT_LIST_GET_URL);
    //const results = response.results;
    const products = [
      {
        name: 'Apple Iphone9',
        cost: 5000,
        id: 1,
        categories: [
          { name: 'phone', id: 1221 },
          { name: 'electronics', id: 567 }
        ]
      },
      {
        name: 'Apple Iphone7',
        cost: 5000,
        id: 2,
        categories: [
          { name: 'phone', id: 1221 },
          { name: 'electronics', id: 567 }
        ]
      }

    ];

    //yield delay(1000);
    yield put(productListSetLoading(false));
    yield put(productListSetProducts(products))
  }
  catch (err) {
    yield put(productListSetLoading(false));
    yield productListSetError("Something went wrong");
  }
}

export function* watchFetchProducts() {
  yield takeLatest(types.PRODUCT_LIST_FETCH_PRODUCTS, fetchProducts)
}
