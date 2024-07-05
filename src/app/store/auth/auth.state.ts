import { getToken } from './auth.actions';
import { AuthState } from './auth.model';

export const initAuthState: AuthState = {
  user: undefined,
  token: getToken(),
  refreshToken: undefined,
  errorMessage: '',
};
