import { createReducer, on } from '@ngrx/store';
import { initAuthState } from './auth.state';
import {
  addToken,
  deleteToken,
  login,
  loginFailure,
  loginSuccess,
  logout,
} from './auth.actions';

const authReducer = createReducer(
  initAuthState,
  on(login, (state, action) => {
    return {
      ...state,
      token: '',
      user: undefined,
    };
  }),
  on(loginSuccess, (state, action) => {
    addToken(action.token);
    return {
      ...state,
      token: action.token,
      errorMessage: '',
    };
  }),
  on(loginFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),
  on(logout, (state) => {
    deleteToken();
    return {
      ...state,
      token: undefined,
      user: undefined,
      errorMessage: '',
    };
  })
);

export const authSlice = {
  name: 'auth',
  reducer: authReducer,
};
