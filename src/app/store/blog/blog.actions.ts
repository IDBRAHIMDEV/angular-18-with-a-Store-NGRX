import { createAction, props } from '@ngrx/store';
import { Blog } from './blog.model';

export const LOAD_ARTICLES = '[Blog dist] load all articles dist';
export const LOAD_ARTICLES_SUCCESS =
  '[Blog dist] load all articles success dist';
export const LOAD_ARTICLES_FAILURE =
  '[Blog dist] load all articles failure dist';

export const loadAllArticlesDist = createAction(LOAD_ARTICLES);

export const loadAllArticlesSuccessDist = createAction(
  LOAD_ARTICLES_SUCCESS,
  props<{ list: Blog[] }>()
);

export const loadAllArticlesFailureDist = createAction(
  LOAD_ARTICLES_FAILURE,
  props<{ error: string }>()
);

export const addArticle = createAction(
  '[Blog] create article',
  props<{ article: Blog }>()
);

export const updateArticle = createAction(
  '[Blog] update article',
  props<{ article: Blog }>()
);

export const deleteArticle = createAction(
  '[Blog] delete article',
  props<{ id: number }>()
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
