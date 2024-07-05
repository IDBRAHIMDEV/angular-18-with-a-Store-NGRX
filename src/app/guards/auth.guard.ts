import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getToken } from '../store/auth/auth.selectors';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  store.select(getToken).subscribe({
    next: (res) => {
      if (res) {
        return true;
      }
      router.navigate(['/auth/login']);
      return false;
    },
  });

  return true;
};
