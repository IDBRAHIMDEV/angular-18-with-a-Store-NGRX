import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/app.states';
import { Observable } from 'rxjs';
import { Blog } from '../../../store/blog/blog.model';
import { getArticles } from '../../../store/blog/blog.selectors';
import { AsyncPipe } from '@angular/common';
import { CardArticleComponent } from '../../../components/blog/card-article/card-article.component';
import { AddArticleComponent } from '../add-article/add-article.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { DestroyArticleComponent } from '../destroy-article/destroy-article.component';
import { SkeletonCardComponent } from '../../../components/shared/skeleton-card/skeleton-card.component';
import { LoadingComponent } from '../../../components/shared/loading/loading.component';
import { AlertComponent } from '../../../components/shared/alert/alert.component';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [
    AsyncPipe,
    CardArticleComponent,
    AddArticleComponent,
    EditArticleComponent,
    DestroyArticleComponent,
    SkeletonCardComponent,
    LoadingComponent,
    AlertComponent,
  ],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css',
})
export class ListArticleComponent implements OnInit {
  isModalOpen = false;
  editable: boolean = false;
  deletable: boolean = false;

  articles$!: Observable<Blog[]>;
  constructor(private store: Store<AppStore>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select(getArticles);
  }

  openModal() {
    this.initModals();
    this.isModalOpen = true;
  }

  openEditModal() {
    this.initModals();
    this.openModal();
    this.editable = true;
  }

  openDeleteModal() {
    this.initModals();
    this.openModal();
    this.deletable = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.editable = false;
  }

  initModals() {
    this.editable = false;
    this.deletable = false;
    this.isModalOpen = false;
  }
}
