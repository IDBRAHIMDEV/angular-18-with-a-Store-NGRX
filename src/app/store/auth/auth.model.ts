export interface Credential {
  username: string;
  password: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  id: number;
  email: string;
  name: Name;
  phone: string;
}

export interface AuthState {
  user: User | undefined;
  token: string | undefined;
  errorMessage: string;
}
