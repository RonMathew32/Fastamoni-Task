const createAsyncActionTypes = (baseActionType) => ({
  GET: `GET_${baseActionType}`,
  SET: `SET_${baseActionType}`,
  UPDATE: `UPDATE_${baseActionType}`,
});

export const ACTION_TYPES = {
  LOGIN: createAsyncActionTypes('LOGIN'),
  REGISTERED: createAsyncActionTypes('REGISTERED'),
  USER_PROFILE: createAsyncActionTypes('USER_PROFILE'),
  LOGOUT: createAsyncActionTypes('LOGOUT'),
  USER_CLEAR: createAsyncActionTypes('USER_CLEAR')
};
