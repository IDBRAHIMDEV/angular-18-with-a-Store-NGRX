import { CounterState } from './counter/counter.model';
import { BlogState } from './blog/blog.model';

import { counterSlice } from './counter/counter.reducer';
import { blogSlice } from './blog/blog.reducer';

export interface AppStore {
  counter: CounterState;
  blog: BlogState;
}

export const store = {
  counter: counterSlice,
  blog: blogSlice,
};
