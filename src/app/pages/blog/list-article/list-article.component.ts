import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/app.states';
import { Observable } from 'rxjs';
import { Blog } from '../../../store/blog/blog.model';
import { getArticles } from '../../../store/blog/blog.selectors';
import { AsyncPipe } from '@angular/common';
import { CardArticleComponent } from '../../../components/blog/card-article/card-article.component';
import { AddArticleComponent } from '../add-article/add-article.component';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [AsyncPipe, CardArticleComponent, AddArticleComponent],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css',
})
export class ListArticleComponent implements OnInit {
  isModalOpen = false;

  articles$!: Observable<Blog[]>;
  constructor(private store: Store<AppStore>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select(getArticles);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
