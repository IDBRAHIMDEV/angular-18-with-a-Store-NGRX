import { Routes } from '@angular/router';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogLayoutComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./list-article/list-article.component').then(
            (c) => c.ListArticleComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./show-article/show-article.component').then(
            (c) => c.ShowArticleComponent
          ),
      },
    ],
  },
];
