export interface Credential {
  username: string;
  password: string;
}

export interface LoginResult {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
}

export interface AuthState {
  user: User | undefined;
  token: string | undefined;
  refreshToken: string | undefined;
  errorMessage: string;
}
