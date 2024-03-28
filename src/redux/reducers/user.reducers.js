import {ACTION_TYPES} from '../actions/actionTypes';

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  const {type, data} = action;
  switch (type) {
    case ACTION_TYPES.USER_PROFILE.SET:
      return {
        ...state,
        user: data,
      };
    case ACTION_TYPES.USER_CLEAR.SET:
      return {
        ...state,
        ...initialState
      }
    default:
      return state;
  }
};

export default UserReducer;
