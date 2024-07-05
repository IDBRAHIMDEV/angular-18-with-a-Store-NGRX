import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import { LOAD_PRODUCTS } from './product.types';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  loadAllProductsFailure,
  loadAllProductsSuccess,
} from './product.actions';

export class ProductEffect {
  actions$ = inject(Actions);
  productService = inject(ProductService);

  productEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_PRODUCTS),
      exhaustMap((action) =>
        this.productService.all().pipe(
          map((action) => loadAllProductsSuccess({ products: action })),
          catchError((err) =>
            of(loadAllProductsFailure({ error: err.messaage }))
          )
        )
      )
    )
  );
}
