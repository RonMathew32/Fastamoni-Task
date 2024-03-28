import {all} from 'redux-saga/effects';
import {
  loginRequestSaga,
  registerdRequestSaga,
} from './auth.saga';
import { getUserProfileRequestSaga, updateUserProfileRequestSaga } from './user.saga';

export function* rootSaga() {
  yield all([
    loginRequestSaga(),
    registerdRequestSaga(),
    getUserProfileRequestSaga(),
    updateUserProfileRequestSaga(),
  ]);
}
