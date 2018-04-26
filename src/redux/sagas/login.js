import { put, call, takeLatest } from 'redux-saga/effects'
import { api } from '../../utils/api'
import { types, loginUserNameChange, loginPasswordChange, loginSetLoading, loginSetError} from '../actions'
import {URLS} from '../../configurations/config.js'

export function* watchLogin() {
  yield takeLatest(types.LOGIN_DO_LOGIN, workerDoLogin)
}

function* workerDoLogin({pushFunction, username, password}) {

  try {
    if (!username || !password) {
      yield put(loginSetError("Username and password are mandatory for login"));
    } else {
      yield  put(loginSetError(""));
      yield put(loginSetLoading(true));
      let response = yield call(api, `${URLS.LOGIN}=${username}`);
      yield put(loginSetLoading(false));
      if (response && response.count === 0) {
        yield put(loginSetError('Invalid username or password'));
      } else {
        const { results } = response;
        let user;
        for (let i = 0; i < results.length; i++) {
          const userInfo = results[ i ];

          if (userInfo.name === username && userInfo.birth_year === password) {
            user = userInfo;
            break;
          }
        }
        if (user) {
          yield localStorage.setItem('userInfo', username);
          yield call(pushFunction, '/');
          yield put(loginPasswordChange(''));
          yield put(loginUserNameChange(''));
          yield put(loginSetError(''));
        } else {
          yield put(loginSetError('Invalid username or password'));
        }
      }

    }
  } catch (e) {
    yield put(loginSetLoading(false));
    yield put(loginSetError("Something went wrong"));
  }
}

export function* watchLogout() {
  yield takeLatest(types.LOGIN_DO_LOGOUT, workerDoLogout)
}

function* workerDoLogout(action) {
  console.log('111 777 argument of logout saga...', action.pushFunction)
  yield localStorage.removeItem('userInfo');
  yield call(action.pushFunction, '/login');
}