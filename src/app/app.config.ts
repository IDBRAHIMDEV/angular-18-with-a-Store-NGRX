import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { store } from './store/app.states';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BlogEffects } from './store/blog/blog.effects';
import { AuthEffect } from './store/auth/auth.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { ProductEffect } from './store/products/product.effects';
import { authInterceptor } from './services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore({
      reducer: routerReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideState(store.counter),
    provideState(store.blog),
    provideState(store.auth),
    provideState(store.product),
    provideEffects([BlogEffects, AuthEffect, ProductEffect]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouterStore(),
  ],
};
