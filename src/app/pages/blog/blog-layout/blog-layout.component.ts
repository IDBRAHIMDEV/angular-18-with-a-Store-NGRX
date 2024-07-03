import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddArticleComponent } from '../add-article/add-article.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { DestroyArticleComponent } from '../destroy-article/destroy-article.component';

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AddArticleComponent,
    EditArticleComponent,
    DestroyArticleComponent,
  ],
  templateUrl: './blog-layout.component.html',
  styleUrl: './blog-layout.component.css',
})
export class BlogLayoutComponent {
  isModalOpen = false;
  editable = false;
  deletable = false;

  closeModal() {
    this.isModalOpen = false;
    this.editable = false;
  }
}
