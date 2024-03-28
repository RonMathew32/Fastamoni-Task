import { ACTION_TYPES } from './actionTypes';

export const getLogin = data => ({ type: ACTION_TYPES.LOGIN.GET, data });

export const setLogin = data => ({ type: ACTION_TYPES.LOGIN.SET, data });

export const setLogout = data => ({ type: ACTION_TYPES.LOGOUT.SET, data });

export const getRegsitered = data => ({ type: ACTION_TYPES.REGISTERED.GET, data });

export const setRegsitered = data => ({ type: ACTION_TYPES.REGISTERED.SET, data });