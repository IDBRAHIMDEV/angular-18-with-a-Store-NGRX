import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogService } from '../../services/blog.service';
import {
  ADD_ARTICLE,
  LOAD_ARTICLES,
  addArticleFailure,
  addArticleSuccess,
  loadAllArticlesFailureDist,
  loadAllArticlesSuccessDist,
} from './blog.actions';
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
}
