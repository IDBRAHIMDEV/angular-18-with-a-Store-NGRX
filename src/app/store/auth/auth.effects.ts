import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { LOGIN } from './auth.types';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { loginFailure, loginSuccess } from './auth.actions';

export class AuthEffect {
  actions$ = inject(Actions);
  authService = inject(AuthService);

  loadArticlesEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGIN),
      exhaustMap((action) => {
        return this.authService.signIn(action.credential).pipe(
          map((action) => {
            return loginSuccess({ token: action.token });
          }),
          catchError((err) =>
            of(loginFailure({ error: 'Username or password went wrong !!' }))
          )
        );
      })
    );
  });
}
