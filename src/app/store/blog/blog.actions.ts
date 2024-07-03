import { createAction, props } from '@ngrx/store';
import { Blog } from './blog.model';
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
  LOAD_ONE_ARTICLE,
  LOAD_ONE_ARTICLE_FAILURE,
  LOAD_ONE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE_SUCCESS,
} from './blog.types';

export const loadAllArticlesDist = createAction(LOAD_ARTICLES);

export const loadAllArticlesSuccessDist = createAction(
  LOAD_ARTICLES_SUCCESS,
  props<{ list: Blog[] }>()
);

export const loadAllArticlesFailureDist = createAction(
  LOAD_ARTICLES_FAILURE,
  props<{ error: string }>()
);

export const addArticle = createAction(ADD_ARTICLE, props<{ article: Blog }>());
export const addArticleSuccess = createAction(
  ADD_ARTICLE_SUCCESS,
  props<{ article: Blog }>()
);

export const addArticleFailure = createAction(
  ADD_ARTICLE_FAILURE,
  props<{ error: string }>()
);

export const updateArticle = createAction(
  UPDATE_ARTICLE,
  props<{ article: Blog }>()
);

export const updateArticleSuccess = createAction(
  UPDATE_ARTICLE_SUCCESS,
  props<{ article: Blog }>()
);

export const updateArticleFailure = createAction(
  UPDATE_ARTICLE_FAILURE,
  props<{ error: string }>()
);

export const deleteArticle = createAction(
  DELETE_ARTICLE,
  props<{ id: number }>()
);

export const deleteArticleSuccess = createAction(
  DELETE_ARTICLE_SUCCESS,
  props<{ id: number }>()
);

export const deleteArticleFailure = createAction(
  DELETE_ARTICLE_FAILURE,
  props<{ error: string }>()
);

export const loadArticles = createAction(
  '[Blog] load articles',
  props<{ list: Blog[] }>()
);

export const loadOneArticle = createAction(
  LOAD_ONE_ARTICLE,
  props<{ article: Blog }>()
);
