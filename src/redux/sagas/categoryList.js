import { put, takeLatest} from 'redux-saga/effects'
import { types, categoryListSetLoading, categoryListSetCategories, categoryListSetError } from '../actions/'

function* fetchCategories(action) {

    try {
        let x = put(categoryListSetLoading(true));
        yield x;
        //const response = yield api(PRODUCT_LIST_GET_URL);
        //const results = response.results;
        const categories = [
            {
                name: 'Cat1 from saga...',
                id: 1,
                subCategories: [
                    {
                        name: 'sub-cat1',
                        id: 11,
                        subCategories: [
                            {
                                name: 'sub-sub-cat1',
                                id: 111
                            }
                        ]
                    }
                ]
            },
            {
                name: 'cat2',
                id: 2,
                subCategories: [
                    {
                        name: 'sub-cat2',
                        id: 12,
                        subCategories: [
                            {
                                name: 'sub-sub-cat2',
                                id: 122
                            }
                        ]
                    }
                ]
            }
        ];

        //yield delay(1000);
        yield put(categoryListSetLoading(false));
        yield put(categoryListSetCategories(categories))
    }
    catch (err) {
        yield put(categoryListSetLoading(false));
        yield categoryListSetError("Something went wrong");
    }
}


export function* watchFetchCategories() {
    yield takeLatest(types.CATEGORY_LIST_FETCH_CATEGORIES, fetchCategories)
}
