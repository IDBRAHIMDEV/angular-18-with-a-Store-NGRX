import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Blog, BlogState } from './blog.model';

const getBlogState = createFeatureSelector<BlogState>('blog');

export const getArticles = createSelector(getBlogState, (state) => state.list);

export const getArticle = createSelector(
  getBlogState,
  (state) => state.article
);
