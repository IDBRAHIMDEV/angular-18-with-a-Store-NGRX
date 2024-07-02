import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogService } from '../../services/blog.service';
import {
  LOAD_ARTICLES,
  loadAllArticlesFailureDist,
  loadAllArticlesSuccessDist,
} from './blog.actions';
import { EMPTY, catchError, exhaustMap, map, of } from 'rxjs';

Injectable();
export class BlogEffects {
  private actions$ = inject(Actions);
  private blogService = inject(BlogService);

  blogEffect = createEffect(() =>
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
}
