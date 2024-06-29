import { createSelector } from '@ngrx/store';
import { AppStore } from '../app.states';

export const selectCouterState = (state: AppStore) => state.counter;

export const selectCount = createSelector(
  selectCouterState,
  (state) => state.count
);
