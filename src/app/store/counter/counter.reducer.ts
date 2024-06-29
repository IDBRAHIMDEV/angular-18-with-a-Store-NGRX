import { createReducer, on } from '@ngrx/store';
import { counterState } from './counter.state';
import { decrement, increment, reset } from './counter.actions';

const counterReducer = createReducer(
  counterState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => {
    if (state.count) {
      return { ...state, count: state.count - 1 };
    }
    return { ...state };
  }),
  on(reset, (state) => ({ ...state, count: 0 }))
);

export const counterSlice = {
  name: 'counter',
  reducer: counterReducer,
};
