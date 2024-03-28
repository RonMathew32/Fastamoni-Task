import {put, takeLatest } from '@redux-saga/core/effects';
import { ACTION_TYPES } from '../actions/actionTypes';
import { ApiCall } from '../../utils/apiService';
import { setUserProfile } from '../actions/user.actions';

function* getUserProfileRequest({ data }) {
  const headers = data?.token? {Authorization: `Bearer ` + data?.token} : {};
  try {
    data?.setLoading ? data?.setLoading(true) : null;
    const res = yield ApiCall({
      body: data?.payload,
      verb: 'GET',
      route: `api/users/${data?.param}`,
      headers
    });
    if (res.status !== 200) {
      console.log('GET PROFILE FAILEDD ', res);
      data?.setLoading ? data?.setLoading(false) : null;
    } else if (res.status == 200) {
      console.log('GET PROFILE SUCCESSFULL ', res);
      data?.setUser(res?.response)
      yield put(setUserProfile(res?.response));
      data?.setLoading ? data?.setLoading(false) : null;
    }
  } catch (e) {
    console.log('GET PROFILE FAILED ', e);
    data?.setLoading ? data?.setLoading(false) : null;
    return e.toString();
  }
}

export function* getUserProfileRequestSaga() {
  yield takeLatest(ACTION_TYPES.USER_PROFILE.GET, getUserProfileRequest);
}



function* updateUserProfileRequest({ data }) {
  const headers = data?.token? {Authorization: `Bearer ` + data?.token} : {};
  try {
    data?.setLoading ? data?.setLoading(true) : null;
    const res = yield ApiCall({
      body: data?.payload,
      verb: 'PATCH',
      route: `api/users/${data?.param}`,
      headers
    });
    if (res.status !== 200) {
      console.log('UPDATE PROFILE FAILEDD ', res);
      data?.setLoading ? data?.setLoading(false) : null;
    } else if (res.status == 200) {
      console.log('UPDATE PROFILE SUCCESSFULL ', res);
      const originalData = {
        ...data?.user
      }
      const patchData = {
        ...res
      }
      originalData.data.last_name = patchData.response.last_name;
      originalData.data.email = patchData.response.email;
      originalData.support.text = patchData.response.text;
      originalData.data.updatedAt = patchData.response.updatedAt;
      yield put(setUserProfile(originalData));
      data?.onSuccess?  data?.onSuccess() : null
      data?.setLoading ? data?.setLoading(false) : null;
    }
  } catch (e) {
    console.log('UPDATE PROFILE FAILED ', e);
    data?.setLoading ? data?.setLoading(false) : null;
    return e.toString();
  }
}

export function* updateUserProfileRequestSaga() {
  yield takeLatest(ACTION_TYPES.USER_PROFILE.UPDATE, updateUserProfileRequest);
}