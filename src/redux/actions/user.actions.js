import { ACTION_TYPES } from "./actionTypes";

export const getUserProfile = data => ({ type: ACTION_TYPES.USER_PROFILE.GET, data });

export const setUserProfile = data => ({ type: ACTION_TYPES.USER_PROFILE.SET, data });

export const updateUserProfile = data => ({ type: ACTION_TYPES.USER_PROFILE.UPDATE, data });

export const setUserClear = data => ({ type: ACTION_TYPES.USER_CLEAR.SET, data });
