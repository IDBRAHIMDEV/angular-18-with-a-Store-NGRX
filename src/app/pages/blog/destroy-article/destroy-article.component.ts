import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../../store/blog/blog.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  deleteArticle,
  loadOneArticle,
} from '../../../store/blog/blog.actions';
import { get } from 'lodash';
import { getArticle } from '../../../store/blog/blog.selectors';

@Component({
  selector: 'app-destroy-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destroy-article.component.html',
  styleUrl: './destroy-article.component.css',
})
export class DestroyArticleComponent implements OnInit {
  @Input() isOpen = false;
  @Output() close = new EventEmitter();

  article!: Blog;
  id: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getArticle).subscribe({
      next: (res) => {
        this.article = res;
      },
    });
  }

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }

  deleteArticle() {
    this.store.dispatch(deleteArticle({ id: this.article.id }));
    this.closeModal();
  }
}
