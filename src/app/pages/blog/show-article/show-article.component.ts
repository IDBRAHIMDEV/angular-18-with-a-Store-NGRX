import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import { Blog } from '../../../store/blog/blog.model';
import { getArticle } from '../../../store/blog/blog.selectors';
import { CardArticleComponent } from '../../../components/blog/card-article/card-article.component';

@Component({
  selector: 'app-show-article',
  standalone: true,
  imports: [RouterLink, CardArticleComponent],
  templateUrl: './show-article.component.html',
  styleUrl: './show-article.component.css',
})
export class ShowArticleComponent implements OnInit {
  store = inject(Store);
  article!: Blog;

  isModalOpen = false;
  editable: boolean = false;
  deletable: boolean = false;

  ngOnInit(): void {
    this.store.select(getArticle).subscribe({
      next: (res) => {
        this.article = res;
      },
    });
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
