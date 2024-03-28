import {ACTION_TYPES} from '../actions/actionTypes';

const initialState = {
  user: null,
  token: null,
  user_id: null
};

const AuthReducer = (state = initialState, action) => {
  const {type, data} = action;
  switch (type) {
    case ACTION_TYPES.LOGIN.SET:
      return {
        ...state,
        token: data.token,
      };
    case ACTION_TYPES.REGISTERED.SET:
        return {
          ...state,
          user_id: data.id
      };
    case ACTION_TYPES.USER_PROFILE.SET:
      return {
        ...state,
        user: data,
      };
    case ACTION_TYPES.LOGOUT.SET:
        return {
          ...state,
          user: null,
          token: null,
          user_id: null
        };
    default:
      return state;
  }
};

export default AuthReducer;
