import { createAction, props } from '@ngrx/store';
import {
  ADD_ARTICLE,
  ADD_ARTICLE_FAILURE,
  ADD_ARTICLE_SUCCESS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  LOAD_ARTICLES,
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLES_SUCCESS,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE_SUCCESS,
} from '../blog/blog.actions';
import {
  LOAD_ONE_PRODUCT,
  LOAD_ONE_PRODUCT_FAILURE,
  LOAD_ONE_PRODUCT_SUCCESS,
} from './product.types';
import { Product } from './product.model';

export const loadAllProducts = createAction(LOAD_ARTICLES);
export const loadAllProductsSuccess = createAction(
  LOAD_ARTICLES_SUCCESS,
  props<{ products: Product[] }>()
);
export const loadAllProductsFailure = createAction(
  LOAD_ARTICLES_FAILURE,
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
  ADD_ARTICLE,
  props<{ product: Product }>()
);
export const addProductSuccess = createAction(
  ADD_ARTICLE_SUCCESS,
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  ADD_ARTICLE_FAILURE,
  props<{ error: string }>()
);

export const updateProduct = createAction(
  UPDATE_ARTICLE,
  props<{ id: number }>()
);
export const updateProductSuccess = createAction(
  UPDATE_ARTICLE_SUCCESS,
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  UPDATE_ARTICLE_FAILURE,
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  DELETE_ARTICLE,
  props<{ id: number }>()
);
export const deleteProductSuccess = createAction(DELETE_ARTICLE_SUCCESS);

export const deleteProductFailure = createAction(
  DELETE_ARTICLE_FAILURE,
  props<{ error: string }>()
);
