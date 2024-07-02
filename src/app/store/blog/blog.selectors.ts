import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Blog, BlogState } from './blog.model';
import { pick } from 'lodash';

const getBlogState = createFeatureSelector<BlogState>('blog');

export const getArticles = createSelector(getBlogState, (state) =>
  pick(state, ['list', 'errorMessage'])
);

export const getArticle = createSelector(
  getBlogState,
  (state) => state.article
);
