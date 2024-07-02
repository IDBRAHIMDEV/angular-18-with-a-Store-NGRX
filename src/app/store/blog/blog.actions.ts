import { createAction, props } from '@ngrx/store';
import { Blog } from './blog.model';

export const LOAD_ARTICLES = '[Blog dist] load all articles dist';
export const LOAD_ARTICLES_SUCCESS =
  '[Blog dist] load all articles success dist';
export const LOAD_ARTICLES_FAILURE =
  '[Blog dist] load all articles failure dist';

export const ADD_ARTICLE = '[Blog dist] create article dist';
export const ADD_ARTICLE_SUCCESS = '[Blog dist] create article success dist';
export const ADD_ARTICLE_FAILURE = '[Blog dist] create article failure dist';

export const UPDATE_ARTICLE = '[Blog dist] update article dist';
export const UPDATE_ARTICLE_SUCCESS = '[Blog dist] update article success dist';
export const UPDATE_ARTICLE_FAILURE = '[Blog dist] update article failure dist';

export const DELETE_ARTICLE = '[Blog dist] delete article dist';
export const DELETE_ARTICLE_SUCCESS = '[Blog dist] delete article success dist';
export const DELETE_ARTICLE_FAILURE = '[Blog dist] delete article failure dist';

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
  '[Blog] load one article',
  props<{ article: Blog }>()
);

export const editArticle = createAction('[Blo] edit article');
