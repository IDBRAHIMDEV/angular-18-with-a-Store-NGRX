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
import { omit, pick } from 'lodash';

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
    console.log(action);
    const user = omit(action.loginResult, ['token', 'refreshToken']);
    const { token, refreshToken } = pick(action.loginResult, [
      'token',
      'refreshToken',
    ]);

    addToken(token);
    return {
      ...state,
      user,
      token,
      refreshToken,
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
      refreshToken: undefined,
      user: undefined,
      errorMessage: '',
    };
  })
);

export const authSlice = {
  name: 'auth',
  reducer: authReducer,
};
