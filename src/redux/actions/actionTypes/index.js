const createAsyncActionTypes = (baseActionType) => ({
  GET: `GET_${baseActionType}`,
  SET: `SET_${baseActionType}`,
  UPDATE: `UPDATE_${baseActionType}`,
});

export const ACTION_TYPES = {
  LOGIN: createAsyncActionTypes('LOGIN'),
  REGISTERED: createAsyncActionTypes('REGISTERED'),
  GETUSER: createAsyncActionTypes('GETUSER'),
  SETUSER: createAsyncActionTypes('SETUSER'),
  USER_PROFILE: createAsyncActionTypes('USER_PROFILE'),
  USER_DATA: createAsyncActionTypes('USER_DATA'),
  LOGOUT: createAsyncActionTypes('LOGOUT'),
  USER_CLEAR: createAsyncActionTypes('USER_CLEAR')
};
