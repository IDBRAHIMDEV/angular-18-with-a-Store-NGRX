import { AuthState } from './auth.model';

export const initAuthState: AuthState = {
  user: undefined,
  token: '',
  errorMessage: '',
};
