import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../../store/blog/blog.model';
import { Store } from '@ngrx/store';
import { loadOneArticle } from '../../../store/blog/blog.actions';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css',
})
export class CardArticleComponent {
  @Input() article!: Blog;
  @Output() openEditFormArticle = new EventEmitter();

  constructor(private store: Store) {}

  openEditArticle() {
    this.openEditFormArticle.emit();
    this.store.dispatch(loadOneArticle({ article: this.article }));
  }
}
