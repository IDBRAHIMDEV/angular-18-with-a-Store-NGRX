import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list-article/list-article.component').then(
        (c) => c.ListArticleComponent
      ),
  },
];
