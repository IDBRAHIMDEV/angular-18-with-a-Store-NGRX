import { createAction, props } from '@ngrx/store';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './auth.types';

export const login = createAction(LOGIN, props<{ credential: Credential }>());

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ token: string }>()
);

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<{ error: string }>()
);

export const clearAll = () => {
  localStorage.clear();
};

export const deleteToken = () => {
  localStorage.removeItem('bc_token');
};

export const addToken = (token: string) => {
  clearAll();
  localStorage.setItem('bc_token', token);
};
