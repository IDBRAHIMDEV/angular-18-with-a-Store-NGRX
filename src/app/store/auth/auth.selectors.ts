import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.model';

const getAuthState = createFeatureSelector<AuthState>('auth');

export const getToken = createSelector(getAuthState, (state) => state.token);

export const getUser = createSelector(getAuthState, (state) => state.user);

export const getAuthError = createSelector(
  getAuthState,
  (state) => state.errorMessage
);
