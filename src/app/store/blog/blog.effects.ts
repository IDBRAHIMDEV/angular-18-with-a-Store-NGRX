import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogService } from '../../services/blog.service';

import {
  addArticleFailure,
  addArticleSuccess,
  deleteArticleFailure,
  deleteArticleSuccess,
  loadAllArticlesFailureDist,
  loadAllArticlesSuccessDist,
  updateArticleFailure,
  updateArticleSuccess,
} from './blog.actions';

import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  LOAD_ARTICLES,
  UPDATE_ARTICLE,
} from './blog.types';

import { EMPTY, catchError, exhaustMap, map, of } from 'rxjs';

Injectable();
export class BlogEffects {
  private actions$ = inject(Actions);
  private blogService = inject(BlogService);

  loadArticlesEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_ARTICLES),
      exhaustMap((action) => {
        return this.blogService._getAllArticles().pipe(
          map((data) => {
            return loadAllArticlesSuccessDist({ list: data });
          }),
          catchError((err) =>
            of(loadAllArticlesFailureDist({ error: err.statusText }))
          )
        );
      })
    )
  );

  createArticleEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_ARTICLE),
      exhaustMap((action) => {
        return this.blogService._persistArticle(action.article).pipe(
          map((data) => {
            return addArticleSuccess({ article: data });
          }),
          catchError((err) => of(addArticleFailure({ error: err.statusText })))
        );
      })
    )
  );

  updateArticleEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(UPDATE_ARTICLE),
      exhaustMap((action) => {
        return this.blogService
          ._updateArticle(action.article.id, action.article)
          .pipe(
            map((data) => {
              return updateArticleSuccess({ article: data });
            }),
            catchError((err) =>
              of(updateArticleFailure({ error: err.statusText }))
            )
          );
      })
    )
  );

  deleteArticleEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_ARTICLE),
      exhaustMap((action) => {
        return this.blogService._deleteArticle(action.id).pipe(
          map(() => {
            return deleteArticleSuccess({ id: action.id });
          }),
          catchError((err) =>
            of(deleteArticleFailure({ error: err.statusText }))
          )
        );
      })
    )
  );
}
