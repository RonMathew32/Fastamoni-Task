import {put, takeLatest } from '@redux-saga/core/effects';
import { ACTION_TYPES } from '../actions/actionTypes';
import { ApiCall } from '../../utils/apiService';

function* handleApiRequest({
  data,
  route,
  verb,
  successMessage,
  successAction,
  onSuccess,
}) {
  try {
    if (data?.setLoading) data.setLoading(true);

    const headers = data?.token? {Authorization: `${data?.role} Bearer ` + data?.token} : {};
    const res = yield ApiCall({ body: data?.payload, route, verb, headers });
    const { status, response } = res;

    const handleCommonLogic = () => {
      if (data?.setLoading) data.setLoading(false);
      if (data?.ToastMessageLight) data.ToastMessageLight(response?.message);
    };

    switch (status) {
      case 200:
        console.log(`${successMessage} SUCCESSFUL`, response);
        if (onSuccess && response?.token ) onSuccess()
        if (successAction && response?.token) yield put(successAction(response));
        handleCommonLogic();
        break;

      default:
        console.log(`${successMessage} FAILED`, res);
        handleCommonLogic();
    }
  } catch (e) {
    console.error(e);
    if (data?.ToastMessageLight) data.ToastMessageLight('Network request failed');
  } finally {
    if (data?.setLoading) data.setLoading(false);
  }
}


function* loginRequest({ data }) {
  yield handleApiRequest({
    data,
    route: 'api/login',
    verb: 'POST',
    successMessage: 'LOGIN',
    successAction: data?.setLogin,
  });
}

export function* loginRequestSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN.GET, loginRequest);
}

function* registeredRequest({ data }) {
  console.log(data?.onSuccess, 'DATA');
  yield handleApiRequest({
    data,
    route: 'api/register',
    verb: 'POST',
    successMessage: 'REGISTERED',
    onSuccess: data?.onSuccess,
    successAction: data?.setRegsitered
  });
}

export function* registerdRequestSaga() {
  yield takeLatest(ACTION_TYPES.REGISTERED.GET, registeredRequest);
}