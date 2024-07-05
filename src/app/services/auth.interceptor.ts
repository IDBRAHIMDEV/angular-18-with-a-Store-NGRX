import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { getToken } from '../store/auth/auth.actions';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json',
      },
    });
  }

  return next(req);
};
