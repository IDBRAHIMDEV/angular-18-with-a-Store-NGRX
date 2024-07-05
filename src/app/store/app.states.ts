import { CounterState } from './counter/counter.model';
import { BlogState } from './blog/blog.model';

import { counterSlice } from './counter/counter.reducer';
import { blogSlice } from './blog/blog.reducer';
import { AuthState } from './auth/auth.model';
import { authSlice } from './auth/auth.reducers';
import { ProductState } from './products/product.model';
import { productSlice } from './products/product.reducer';

export interface AppStore {
  counter: CounterState;
  blog: BlogState;
  auth: AuthState;
  product: ProductState;
}

export const store = {
  counter: counterSlice,
  blog: blogSlice,
  auth: authSlice,
  product: productSlice,
};
