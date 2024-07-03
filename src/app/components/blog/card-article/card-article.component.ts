import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Blog } from '../../../store/blog/blog.model';
import { Store } from '@ngrx/store';
import { loadOneArticle } from '../../../store/blog/blog.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css',
})
export class CardArticleComponent {
  @Input() article!: Blog;
  @Input() displayShow = true;
  @Output() openEditFormArticle = new EventEmitter();
  @Output() openDeleteModalArticle = new EventEmitter();

  store = inject(Store);
  router = inject(Router);

  openEditArticle() {
    this.openEditFormArticle.emit();
    this.store.dispatch(loadOneArticle({ article: this.article }));
  }

  openDeleteArticle() {
    console.log('delete');
    this.openDeleteModalArticle.emit();
    this.store.dispatch(loadOneArticle({ article: this.article }));
  }

  showOneArticle() {
    this.store.dispatch(loadOneArticle({ article: this.article }));
    this.router.navigate(['/blog', this.article.id]);
  }
}
