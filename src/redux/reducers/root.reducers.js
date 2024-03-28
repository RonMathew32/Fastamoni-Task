import {combineReducers} from 'redux';
import AuthReducer from './auth.reducers';
import UserReducer from './user.reducers';

export const rootReducer = combineReducers({
  authRed: AuthReducer,
  userRed: UserReducer
});
