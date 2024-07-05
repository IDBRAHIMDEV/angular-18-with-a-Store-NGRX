import { createReducer, on } from '@ngrx/store';
import { initProductState } from './product.state';
import {
  addProduct,
  addProductFailure,
  addProductSuccess,
  deleteProduct,
  deleteProductFailure,
  deleteProductSuccess,
  loadAllProducts,
  loadAllProductsFailure,
  loadAllProductsSuccess,
  loadOneProduct,
  loadOneProductFailure,
  loadOneProductSuccess,
  updateProduct,
  updateProductFailure,
  updateProductSuccess,
} from './product.actions';
import { Mode, Product } from './product.model';

const productReducer = createReducer(
  initProductState,
  on(loadAllProducts, (state) => {
    return {
      ...state,
      mode: Mode.List,
      products: [],
    };
  }),
  on(loadAllProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      errorMessage: '',
    };
  }),
  on(loadAllProductsFailure, (state, action) => {
    return {
      ...state,
      products: [],
      errorMessage: action.error,
    };
  }),
  on(loadOneProduct, (state, action) => {
    return {
      ...state,
      productId: action.id,
      product: {} as Product,
    };
  }),
  on(loadOneProductSuccess, (state, action) => {
    return {
      ...state,
      product: action.product,
      errorMessage: '',
    };
  }),
  on(loadOneProductFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),
  on(addProduct, (state, action) => {
    return {
      ...state,
      mode: Mode.Add,
    };
  }),
  on(addProductSuccess, (state, action) => {
    return {
      ...state,
      products: [action.product, ...state.products],
      errorMessage: '',
    };
  }),
  on(addProductFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),
  on(updateProduct, (state, action) => {
    return {
      ...state,
      productId: action.id,
      mode: Mode.Update,
    };
  }),
  on(updateProductSuccess, (state, action) => {
    return {
      ...state,
      products: state.products.map((item) =>
        item.id === state.productId ? action.product : item
      ),
      errorMessage: '',
    };
  }),
  on(updateProductFailure, (state, action) => {
    return {
      ...state,
      productId: 0,
      errorMessage: action.error,
    };
  }),
  on(deleteProduct, (state, action) => {
    return {
      ...state,
      productId: action.id,
      mode: Mode.Delete,
    };
  }),
  on(deleteProductSuccess, (state, action) => {
    return {
      ...state,
      products: state.products.filter((item) => item.id !== state.productId),
      errorMessage: '',
    };
  }),
  on(deleteProductFailure, (state, action) => {
    return {
      ...state,
      productId: 0,
      errorMessage: action.error,
    };
  })
);

export const productSlice = {
  name: 'product',
  reducer: productReducer,
};
