import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.model';

const getProductState = createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(
  getProductState,
  (state) => state.products
);

export const getProduct = createSelector(
  getProductState,
  (state) => state.product
);

export const errorProduct = createSelector(
  getProductState,
  (state) => state.errorMessage
);

export const modeProduct = createSelector(
  getProductState,
  (state) => state.mode
);
