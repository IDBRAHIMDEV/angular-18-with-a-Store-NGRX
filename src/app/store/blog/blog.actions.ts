import { createAction, props } from '@ngrx/store';
import { Blog } from './blog.model';

export const addArticle = createAction(
  '[Blog] create article',
  props<{ article: Blog }>()
);

export const updateArticle = createAction(
  '[Blog] update article',
  props<{ article: Blog }>()
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
export const deleteArticle = createAction('[Blog] delete article');
