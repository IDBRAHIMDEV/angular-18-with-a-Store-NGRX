import { Product, ProductState } from './product.model';

export const initProductState: ProductState = {
  productId: 0,
  product: {} as Product,
  products: [],
  loading: false,
  errorMessage: '',
  mode: 'List',
};
