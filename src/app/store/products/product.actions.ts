import { createAction, props } from '@ngrx/store';

import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  LOAD_ONE_PRODUCT,
  LOAD_ONE_PRODUCT_FAILURE,
  LOAD_ONE_PRODUCT_SUCCESS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
} from './product.types';

import { Product } from './product.model';

export const loadAllProducts = createAction(LOAD_PRODUCTS);
export const loadAllProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);
export const loadAllProductsFailure = createAction(
  LOAD_PRODUCTS_FAILURE,
  props<{ error: string }>()
);

export const loadOneProduct = createAction(
  LOAD_ONE_PRODUCT,
  props<{ id: number }>()
);
export const loadOneProductSuccess = createAction(
  LOAD_ONE_PRODUCT_SUCCESS,
  props<{ product: Product }>()
);
export const loadOneProductFailure = createAction(
  LOAD_ONE_PRODUCT_FAILURE,
  props<{ error: string }>()
);

export const addProduct = createAction(
  ADD_PRODUCT,
  props<{ product: Product }>()
);
export const addProductSuccess = createAction(
  ADD_PRODUCT_SUCCESS,
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  ADD_PRODUCT_FAILURE,
  props<{ error: string }>()
);

export const updateProduct = createAction(
  UPDATE_PRODUCT,
  props<{ id: number }>()
);
export const updateProductSuccess = createAction(
  UPDATE_PRODUCT_SUCCESS,
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  UPDATE_PRODUCT_FAILURE,
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  DELETE_PRODUCT,
  props<{ id: number }>()
);
export const deleteProductSuccess = createAction(DELETE_PRODUCT_SUCCESS);

export const deleteProductFailure = createAction(
  DELETE_PRODUCT_FAILURE,
  props<{ error: string }>()
);
